// TODO: GitHub Actions - more pertinent now article is rendered at build time not run time
// TODO: Translations
// TODO: Article links go to old website
// TODO: Use path.join everywhere for cross-platform compatibility

(async() => {
  const fs = require('fs')
  const YAML = require('yaml')
  const { join } = require('path')
  const asciidoctor = require('asciidoctor')()
  const writeMarkdownFile = require('./write_markdown_file')
  const generate = require('./generate_learning_path_markdown')

  const urls = YAML.parse(fs.readFileSync('../config/urls.yaml', 'utf-8'))

  const getYouTubeCode = (section, articleNumber) => {
    const firstEntryOfGroupIndex = urls.findIndex(entry => entry.section === section.toLowerCase())
    const currentPageIndexOffset = articleNumber - 1
    const youtubeUrl = urls[firstEntryOfGroupIndex + currentPageIndexOffset].video.youtube
    return youtubeUrl.replace('https://www.youtube.com/watch?v=', '')
  }

  const generatorFn = ({ isTranslation, baseWritePath, articleNumber, translation, articleTitle, contributors, image, section, article}) => {
    if (isTranslation) return // TODO: New site translations

    const fileName = isTranslation ? join(baseWritePath, [articleNumber, translation, 'md'].join('.')) : join(baseWritePath, [articleNumber, 'md'].join('.'))
    const weight = parseInt(articleNumber)
    const youtubeCode = getYouTubeCode(section.learning_path_group, weight)

    const frontMatter = {
      title: articleTitle,
      contributors,
      image: `https://img.youtube.com/vi/${youtubeCode}/mqdefault.jpg`,
      featured: weight === 1,
      weight,
      youtubeCode
    }

    const titleStripped = article.asciiDoc.replace(/== (.*)/, '')
    const body = section.renderArticles ? asciidoctor.convert(titleStripped) : ''

    writeMarkdownFile(fileName, frontMatter, body)
  }

  const workbookFn = ({ workbookFileName, contributors, section, workbookPosition }) => {
    const workbookFrontMatter = {
      title: 'Workbook',
      contributors,
      image: section.image,
      weight: workbookPosition
    }

    const workbookReadPath = join('..', 'workbook', section.workbook)
    const body = asciidoctor.convert(fs.readFileSync(workbookReadPath, 'utf-8'))

    writeMarkdownFile(workbookFileName, workbookFrontMatter, body)
  }

  generate('newsite', generatorFn, workbookFn, false)
})()
