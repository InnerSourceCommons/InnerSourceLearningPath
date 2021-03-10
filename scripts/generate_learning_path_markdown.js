const { join, basename, relative } = require('path')
const fs = require('fs')
const yamlFront = require('yaml-front-matter')

const getContributors = require('./get_contributors')
const mkdirSync = require('./mkdir_sync')
const getArticleFiles = require('./get_article_files')
const writeMarkdownFile = require('./write_markdown_file')

const sections = require('./section_data.json')

module.exports = async (writeDir, generatorFn, workbookFn, isJekyllSite) => {
  mkdirSync(join('.', writeDir))

  sections.forEach(section => {
    const { dirName, translations } = section
    const baseReadPath = join('..', dirName)
    const baseWritePath = join('.', writeDir, dirName)
    mkdirSync(baseWritePath)

    translations.concat('' /* The English original */).forEach(async (translation) => {
      const isTranslation = translation !== ''
      const writePath = join(baseWritePath, translation)
      const readPath = join(baseReadPath, translation)
      const articles = getArticleFiles(readPath)

      // Bad separation of concerns (Hugo/Jekyll specific logic shouldn't be here) but is temporary until Jekyll site is decomissioned
      if (isJekyllSite) {
        mkdirSync(writePath)
      } else {
        let indexReadPath = join(readPath, 'index.md')
        if (!fs.existsSync(indexReadPath)) {
          // Default to English index page content
          indexReadPath = join(baseReadPath, 'index.md')
        }
        const indexWritePath = isTranslation ? join(baseWritePath, `_index.${translation}.md`) : join(baseWritePath, '_index.md')

        let { indexContent, ...indexFrontMatter } = yamlFront.loadFront(fs.readFileSync(indexReadPath, 'utf-8'), { contentKeyName: 'indexContent' })
        indexFrontMatter.image = section.image
        indexFrontMatter.contributors = await getContributors(relative('..', readPath))

        writeMarkdownFile(indexWritePath, indexFrontMatter, indexContent)
      }

      articles.forEach(async (article) => {
        const articleTitle = article.asciiDoc.match(/== (.*)/)[1]
        const articleNumber = basename(article.filePath).split('-')[0]
        const contributors = await getContributors(relative('..', article.filePath))

        generatorFn({
          section,
          articleTitle,
          articleNumber,
          isTranslation,
          article,
          translation,
          contributors,
          writePath,
          baseWritePath
        })
      })

      // Workbooks not translated.
      if (!isTranslation) {
        const workbookFileName = join(baseWritePath, 'workbook.md')
        const contributors = await getContributors(`workbook/${section.workbook}`)
        const workbookPosition = articles.length + 1

        workbookFn({
          section,
          workbookFileName,
          contributors,
          workbookPosition
        })
      }
    })
  })
}
