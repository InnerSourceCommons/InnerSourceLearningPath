const { join } = require('node:path');
const { mkdirSync, rmSync, writeFileSync } = require('node:fs');
const puppeteer = require('puppeteer');

const htmlHead = () => {
  return `
  <head>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      @font-face {
        font-family: "PT Sans";
        src: url("https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&display=swap");
      }
      html {
        font-family: "PT Sans";
        font-size: 16 px;
        color: black;
      }
      body {
        min-width: 1058px;
        min-height: 595px;
      }
      .overlay-container {
        background-image: url("https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/A_laptop_and_a_notebook_on_the_wooden_table_%28Pixabay%29.jpg/1024px-A_laptop_and_a_notebook_on_the_wooden_table_%28Pixabay%29.jpg");
        background-repeat: no-repeat;
        padding: 0;
        margin: 0;
        height: 595px;
        width: 1058px;
      }
      .logo {
        padding: 0;
      }
      .color-field {
        background-color: #edf6f5;
        display: flex;
        flex-direction: column;
        height: 595px;
        padding: 24px;
        width: 540px;
      }
      .section {
        border-bottom: 2px solid #0aa8a7;
        color: #595959;
        font-size: 1.8rem;
        margin-top: 60px;
        padding-bottom: 8px;
      }
      .title {
        font-size: 2.4rem;
        margin-top: 60px;
      }
    </style>
  </head>
  `;
}

const htmlBody = (sectionName, itemName) => {
  return `
  <body>
    <div class="overlay-container">
      <div class="color-field">
        <span class="logo"><img width="200px" src="https://innersourcecommons.org/images/logo.png" alt="InnerSource Commons"></span>
        <span class="section">${sectionName}</span>
        <span class="title">${itemName}</span>
      </div>
    </div>
  </body>
  `;
}

const imageMarkup = (sectionName, itemName) => {
  return `
    <!DOCTYPE html>
    <html>
      ${htmlHead()}
      ${htmlBody(sectionName, itemName)}
    </html>
  `;
}

module.exports = createWorkbookImage = async (writePath, sectionName, itemName) => {
  const imageName = `${sectionName}-${itemName}-image.png`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.setContent(imageMarkup(sectionName, itemName));

    const content = await page.$('body');
    const imageBuffer = await content.screenshot();

    writeFileSync(join(writePath, imageName), imageBuffer);
    return imageName;
  } catch (error) {
    console.error(error);
    return '';
  } finally {
    await browser.close();
  }
};
