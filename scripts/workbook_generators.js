const { join } = require('node:path');
const { existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } = require('node:fs');
const puppeteer = require('puppeteer');
const writeMarkdownFile = require('./write_markdown_file');
const asciidoctor = require('asciidoctor')()

const siteImageDir = 'workbooks';
const siteImagePath = `images/learn/${siteImageDir}`;
const imageHtmlHead = () => {
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
      .module-name {
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

const imageHtmlBody = (moduleName, workbookTitle) => {
  return `
  <body>
    <div class="workbook-image-container">
      <div class="color-field"></div>
      <span class="isc-logo"><img src="https://innersourcecommons.org/images/logo.png" alt="InnerSource Commons"></span>
      <span class="module-name">${moduleName}</span>
      <span class="workbook-title">${workbookTitle}</span>
    </div>
  </body>
  `;
}

const imageMarkup = (moduleName, workbookTitle) => {
  return `
    <!DOCTYPE html>
    <html>
      ${imageHtmlHead()}
      ${imageHtmlBody(moduleName, workbookTitle)}
    </html>
  `;
}

/**
 * baseWritePath
 *  folder to create image directory in
 * moduleName
 *  text displayed in the generated image
 * workbookTitle
 *  text displayed in the generated image
 *
 * Creates a new directory called 'workbooks' at the given baseWritePath to contain all generated images.
 * Generates a stock image containing the given text values.
 * Returns the file name of the generated image.
 *
 * NOTE: The given text becomes the generated file name.
 *       Don't use crazy characters, try not to duplicate.
 * **/
const generateWorkbookImage = async (baseWritePath, moduleName, workbookTitle) => {
  const generatedWritePath = join(baseWritePath, siteImageDir);
  const generatedImageName = `${moduleName}-${workbookTitle}-image.png`;
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  if (!existsSync(generatedWritePath)) {
    mkdirSync(generatedWritePath)
  }

  try {
    await page.setContent(imageMarkup(moduleName, workbookTitle));
    const content = await page.$('body');
    const imageBuffer = await content.screenshot();
    writeFileSync(join(generatedWritePath, generatedImageName), imageBuffer);
    return generatedImageName;
  } catch (error) {
    console.error(error);
    return '';
  } finally {
    await browser.close();
  }
}

/**
 * contentFilePath
 *  file that contains the source workbook body (asciidoc)
 * baseWritePath
 *  folder to write the generated workbook file to
 * contributors
 *  array of contributor objs from GitHub
 * imageFileName
 *  image to display on the workbook (expects a site path)
 * weight
 *  determines the order of items displayed on the web site
 *
 * Reads the given file and converts contents from asciidoc to markdown.
 * Writes markdown file to the given path.
 * Inserts workbook metadata (contributors, image name, etc) in the generated file.
 * **/
const generateWorkbookContent = (contentFilePath, baseWritePath, contributors, imageFileName, weight) => {
  const generatedFileName = 'workbook.md';
  const metadata = {
    title: 'Workbook',
    contributors,
    image: join(siteImagePath, imageFileName),
    weight
  };

  if (!existsSync(baseWritePath)) {
    mkdirSync(baseWritePath)
  }

  try {
    const body = asciidoctor.convert(readFileSync(contentFilePath, 'utf-8'));
    writeMarkdownFile(join(baseWritePath, generatedFileName), metadata, body);
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  image: {
    generate: generateWorkbookImage
  },
  content: {
    generate: generateWorkbookContent
  }
}
