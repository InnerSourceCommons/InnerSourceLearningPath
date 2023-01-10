const { join, basename, relative } = require('path')
const fs = require('fs')
const yamlFront = require('yaml-front-matter')
const asciidoctor = require('asciidoctor')()
const YAML = require('yaml')

const getContributors = require('./get_contributors')
const mkdirSync = require('./mkdir_sync')
const getArticleFiles = require('./get_article_files')
const writeMarkdownFile = require('./write_markdown_file')
const sections = require('./section_data.json')
const workbook = require('./workbook_generators.js')

const urls = YAML.parse(fs.readFileSync(join('..', 'config', 'urls.yaml'), 'utf-8'))

const getYouTubeCode = (section, articleNumber) => {
  const sectionLinks = urls.filter(entry => entry.section === section.toLowerCase())
  const videoUrls = sectionLinks[articleNumber - 1]
  if (videoUrls && videoUrls.video && videoUrls.video.youtube) {
    return videoUrls.video.youtube.replace('https://www.youtube.com/watch?v=', '')
  }
  return ''
}

const getYouTubeImage = (youTubeCode) => {
  if (youTubeCode) {
    return `https://img.youtube.com/vi/${youTubeCode}/mqdefault.jpg`
  }
  return ''
}

(async () => {
  const writeDir = 'newsite'
  const writePath = join('.', writeDir)
  mkdirSync(writePath)

  sections.forEach(async (section, sectionDataIndex) => {
    const { dirName } = section
    const baseReadPath = join('..', dirName)
    const baseWritePath = join('.', writeDir, dirName)
    mkdirSync(baseWritePath)

    const translations = fs.readdirSync(baseReadPath, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name)

    translations.concat('' /* The English original */).forEach(async (translation) => {
      const isTranslation = translation !== ''
      const readPath = join(baseReadPath, translation)
      const articles = getArticleFiles(readPath)

      let indexReadPath = join(readPath, 'index.md')
      const indexTranslated = fs.existsSync(indexReadPath)
      if (!indexTranslated) {
        // Default to English index page content
        indexReadPath = join(baseReadPath, 'index.md')
      }
      const indexWritePath = isTranslation ? join(baseWritePath, `_index.${translation}.md`) : join(baseWritePath, '_index.md')

      let { indexContent, ...indexFrontMatter } = yamlFront.loadFront(fs.readFileSync(indexReadPath, 'utf-8'), { contentKeyName: 'indexContent' })
      indexFrontMatter.image = section.image
      indexFrontMatter.weight = sectionDataIndex

      if (!indexTranslated) {
        // Add placeholder text if index is not translated
        indexContent = `This text will be translated soon.${indexContent}`
      }

      writeMarkdownFile(indexWritePath, indexFrontMatter, indexContent)

      articles.forEach(async (article) => {
        const articleTitle = article.asciiDoc.match(/== (.*)/)[1]
        const articleNumber = basename(article.filePath).split('-')[0]
        const contributors = await getContributors(relative('..', article.filePath))
        const fileName = isTranslation ? join(baseWritePath, [articleNumber, translation, 'md'].join('.')) : join(baseWritePath, [articleNumber, 'md'].join('.'))
        const weight = parseInt(articleNumber)
        const youtubeCode = getYouTubeCode(section.learning_path_group, weight)

        const frontMatter = {
          title: articleTitle,
          contributors,
          image: getYouTubeImage(youtubeCode),
          featured: weight === 1,
          weight,
          youtubeCode
        }

        const titleStripped = article.asciiDoc.replace(/== (.*)/, '')
        const body = section.renderArticles || isTranslation ? asciidoctor.convert(titleStripped) : ''

        writeMarkdownFile(fileName, frontMatter, body)
      })

      // Workbooks not translated.
      if (!isTranslation) {
        const contributors = await getContributors(`workbook/${section.workbook}`)
        const wbImageName = await workbook.image.generate('.', "Learning Path", `${section.learning_path_group} Workbook`)

        workbook.content.generate(
          join('..', 'workbook', section.workbook),
          baseWritePath,
          contributors,
          wbImageName,
          articles.length + 1)
      }
    })
  })
})()
