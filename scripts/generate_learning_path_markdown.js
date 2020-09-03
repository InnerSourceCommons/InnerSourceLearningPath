const fs = require('fs')
const YAML = require('yaml')
const { EOL } = require('os')

const getArticleFiles = (path) => {
  return fs.readdirSync(path).reduce((articles, filename) => {
    const filePath = `${path}/${filename}`
    if (fs.lstatSync(filePath).isDirectory()) {
      return [...articles, getArticleFiles(filePath)]
    } else if (filePath.match(/\d\d/) && !filePath.includes('-script.asciidoc')) {
      return [...articles, {
        filePath,
        asciiDoc: fs.readFileSync(filePath, 'utf-8')
      }]
    } else {
      return articles
    }
  }, [])
}

const writeMarkdownFile = (filePath, frontMatter) => {
  const frontMatterTerminator = '---'
  const output = [frontMatterTerminator, YAML.stringify(frontMatter).trim(), frontMatterTerminator].join(EOL)
  fs.writeFileSync(filePath, output)
}

const sections = [
  {
    learning_path_group: 'Introduction',
    dirName: 'introduction',
    workbook: '01-introduction.asciidoc',
    renderArticles: true
  },
  {
    learning_path_group: 'Trusted Committer',
    dirName: 'trusted-committer',
    workbook: '02-trusted-committer.asciidoc',
    renderArticles: true
  },
  {
    learning_path_group: 'Contributor',
    dirName: 'contributor',
    workbook: '04-contributor.asciidoc',
    renderArticles: true
  },
  {
    learning_path_group: 'Product Owner',
    dirName: 'product-owner',
    workbook: '03-product-owner.asciidoc',
    renderArticles: false
  },
]

try {
  fs.mkdirSync('./learningpath')
} catch (e) {
  console.log(e)
}

sections.forEach(({ learning_path_group, dirName, workbook, renderArticles }) => {
  const readPath = `../${dirName}`
  const writePath = `./learningpath/${dirName}`
  const articles = getArticleFiles(readPath)

  try {
    fs.mkdirSync(writePath)
  } catch (e) {
    console.log(e)
  }

  articles.forEach((article) => {
    if (Array.isArray(article)) {
      // Handle non-english articles
    } else {
      const articleTitle = article.asciiDoc.match(/== (.*)/)[1]
      const articleNumber = article.filePath.split('/').pop().split('-')[0]
      const fileName = articleNumber === '01' ? `${writePath}/index.md` : `${writePath}/${articleNumber}.md`
      const frontMatter = {
        layout: 'learning-path-page',
        show_meta: false,
        title: `Learning Path - ${learning_path_group} - ${articleTitle}`,
        learning_path_article: renderArticles ? article.filePath.replace('../', '') : undefined,
        learning_path_group,
        learning_path_menu_title: `${articleNumber} - ${articleTitle}`,
        learning_path_position: parseInt(articleNumber)
      }

      writeMarkdownFile(fileName, frontMatter)
    }
  })

  const workbookFileName = `${writePath}/workbook.md`
  const workbookFrontMatter = {
    layout: 'learning-path-page',
    show_meta: false,
    title: `Learning Path - ${learning_path_group} - Workbook`,
    learning_path_article: `workbook/${workbook}`,
    learning_path_group,
    learning_path_menu_title: `${learning_path_group} Workbook`,
    learning_path_position: articles.length - articles.filter(Array.isArray).length + 1,
    no_video: true
  }

  writeMarkdownFile(workbookFileName, workbookFrontMatter)
})