const { join } = require('node:path');
const { mkdirSync, rmSync, writeFileSync } = require('node:fs');
const puppeteer = require('puppeteer');

const htmlHead = () => {
  return `
  <head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Source+Serif+Pro&family=PT+Sans&display=swap" rel="stylesheet">
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Source+Serif+Pro:wght@400;700&family=PT+Sans:wght@400;700&display=swap');
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html {
        font-family: 'PT Sans';
        font-size: 12px;
        color: white;
      }
      body {
        min-height: 576px;
        min-width: 1024px;
      }
      .workbook-image-container {
        background-image: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/A_laptop_and_a_notebook_on_the_wooden_table_%28Pixabay%29.jpg/1024px-A_laptop_and_a_notebook_on_the_wooden_table_%28Pixabay%29.jpg');
        background-repeat: no-repeat;
        display: flex;
        flex-direction: row;
        /* maintain 16:9 aspect ratio */
        height: 576px;
        width: 1024px;
      }
      .color-field {
        border-bottom: 576px solid #8BAB84;
        border-right: 180px solid transparent;
        position: relative;
        width: 512px;
        z-index: 0;
      }
      .isc-logo {
        margin: 2rem 0 0 2rem;
        position: absolute;
        z-index: 1;
      }
      .isc-logo img {
        width: 256px;
      }
      .section-name {
        font-family: 'Source Serif Pro', serif;
        font-size: 5rem;
        margin: 26rem 0 0 2rem;
        position: absolute;
        z-index: 1;
      }
      .workbook-title {
        font-family: 'PT Sans', sans-serif;
        font-size: 2.2rem;
        position: absolute;
        margin: 32rem 0 0 2rem;
        z-index: 1;
      }
    </style>
  </head>
  `;
}

const htmlBody = (sectionName, itemName) => {
  return `
  <body>
    <div class="workbook-image-container">
      <div class="color-field"></div>
      <span class="isc-logo"><img src="https://innersourcecommons.org/images/logo.png" alt="InnerSource Commons"></span>
      <span class="section-name">${sectionName}</span>
      <span class="workbook-title">${itemName}</span>
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

module.exports = generateWorkbookImage = async (writePath, sectionName, itemName) => {
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
