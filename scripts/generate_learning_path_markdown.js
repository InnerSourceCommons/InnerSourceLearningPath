import { join, basename, relative } from 'path'
import fs from 'fs'
import yamlFront  from 'yaml-front-matter'
import asciidoctor  from 'asciidoctor'
const Asciidoctor = asciidoctor()
import YAML from 'yaml'

import getContributors from './get_contributors.js'
import mkdirSync from './mkdir_sync.js'
import getArticleFiles from './get_article_files.js'
import writeMarkdownFile from './write_markdown_file.js'
import sections from './section_data.json' with { type: "json" }

const urls = YAML.parse(fs.readFileSync(join('..', 'config', 'urls.yaml'), 'utf-8'))
import argsParser from 'args-parser'
const args = argsParser(process.argv)

const getYouTubeCode = (section, articleNumber) => {
  const sectionLinks = urls.filter(entry => entry.section === section.toLowerCase())
  const videoUrls = sectionLinks[articleNumber - 1]
  if (videoUrls && videoUrls.video && videoUrls.video.youtube) {
    return videoUrls.video.youtube.replace('https://www.youtube.com/watch?v=', '')
  }
  return ''
}

const getArticleImage = (youTubeCode) => {
  if (youTubeCode) {
    return `https://img.youtube.com/vi/${youTubeCode}/mqdefault.jpg`
  }
  return 'images/learn/LP-article-default.png'
}

(async () => {
  const writeDir = 'newsite'
  mkdirSync(join('.', writeDir))

  sections.forEach((section, sectionDataIndex) => {
    const { dirName } = section
    const baseReadPath = join('..', dirName)
    const baseWritePath = join('.', writeDir, dirName)
    mkdirSync(baseWritePath)

    var translations = []
    if (!args.e) {
      translations = fs.readdirSync(baseReadPath, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name)
    }

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
          image: getArticleImage(youtubeCode),
          featured: weight === 1,
          weight,
          youtubeCode
        }

        const titleStripped = article.asciiDoc.replace(/== (.*)/, '')
        const body = section.renderArticles || isTranslation ? Asciidoctor.convert(titleStripped) : ''

        writeMarkdownFile(fileName, frontMatter, body)
      })

      const workbookFileName = join(baseWritePath, 'workbook.md')
      const contributors = await getContributors(`workbook/${section.workbook}`)
      const workbookPosition = articles.length + 1

      const workbookFrontMatter = {
          title: 'Workbook',
          contributors,
          image: section.workbookImage,
          weight: workbookPosition
      }

      const workbookReadPath = join('..', 'workbook', section.workbook)

      if (section.workbook && fs.existsSync(workbookReadPath)) {
          const body = Asciidoctor.convert(fs.readFileSync(workbookReadPath, 'utf-8'))
          writeMarkdownFile(workbookFileName, workbookFrontMatter, body)
      }
    })
  })
})()
