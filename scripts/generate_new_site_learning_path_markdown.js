// TODO: Get thumbnails for each video
// TODO: Refactor this and the old script for re-use
// TODO: GitHub Actions - more pertinent now article is rendered at build time not run time
// TODO: Is rendering to HTML, rather than Markdown, acceptable?
// TODO: Translations
// TODO: How to handle new _index pages?
// TODO: Add docs around generating for new site
// TODO: Article links go to old website
// TODO: Article title is duplicated above and below the video - do we want this?
// TODO: Use path.join everywhere for cross-platform compatibility

(async() => {
  const fs = require('fs')
  const YAML = require('yaml')
  const { join } = require('path')
  const getContributors = require('./get_contributors')
  const asciidoctor = require('asciidoctor')()
  const mkdirSync = require('./mkdir_sync')
  const getArticleFiles = require('./get_article_files')
  const writeMarkdownFile = require('./write_markdown_file')

  const sections = require('./section_data.json')
  const urls = YAML.parse(fs.readFileSync('../config/urls.yaml', 'utf-8'))

  const getYouTubeCode = (section, articleNumber) => {
    const firstEntryOfGroupIndex = urls.findIndex(entry => entry.section === section.toLowerCase())
    const currentPageIndexOffset = articleNumber - 1
    const youtubeUrl = urls[firstEntryOfGroupIndex + currentPageIndexOffset].video.youtube
    return youtubeUrl.replace('https://www.youtube.com/watch?v=', '')
  }

  mkdirSync('./newsite')

  sections.forEach(({ learning_path_group, dirName, workbook, translations, image, renderArticles }) => {
    const baseReadPath = `../${dirName}`
    const baseWritePath = `./newsite/${dirName}`
    mkdirSync(baseWritePath)

    translations.concat('' /* The English original */).forEach(async (translation) => {
      const isTranslation = translation !== ''

      const readPath = join(baseReadPath, translation)
      const articles = getArticleFiles(readPath)
      articles.forEach(async (article) => {
        if (isTranslation) return

        const articleTitle = article.asciiDoc.match(/== (.*)/)[1]
        const articleNumber = article.filePath.split('/').pop().split('-')[0]
        const fileName = isTranslation ? join(baseWritePath, [articleNumber, translation, 'md'].join('.')) : join(baseWritePath, [articleNumber, 'md'].join('.'))
        const contributors = await getContributors(article.filePath.replace('../', ''))
        const weight = parseInt(articleNumber)

        const frontMatter = {
          title: articleTitle,
          contributors,
          image,
          featured: weight === 1,
          weight,
          youtubeCode: getYouTubeCode(learning_path_group, weight)
        }

        const body = renderArticles ? asciidoctor.convert(article.asciiDoc) : ''

        writeMarkdownFile(fileName, frontMatter, body)
      })

      // Workbooks not translated.
      if (!isTranslation) {
        const workbookFileName = join(baseWritePath, 'workbook.md')
        const contributors = await getContributors(`workbook/${workbook}`)
        console.log('workbookFileName', workbookFileName)
        const workbookFrontMatter = {
          title: 'Workbook',
          contributors,
          image,
          weight: articles.length + 2
        }

        const workbookReadPath = join('..', 'workbook', workbook)
        const body = asciidoctor.convert(fs.readFileSync(workbookReadPath, 'utf-8'))

        writeMarkdownFile(workbookFileName, workbookFrontMatter, body)
      }
    })
  })
})()
