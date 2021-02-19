(async() => {
  const { join } = require('path')
  const getContributors = require('./get_contributors')
  const mkdirSync = require('./mkdir_sync')
  const getArticleFiles = require('./get_article_files')
  const writeMarkdownFile = require('./write_markdown_file')

  const sections = require('./section_data.json')

  mkdirSync('./learningpath')

  sections.forEach(({ learning_path_group, dirName, workbook, translations, renderArticles }) => {
    const baseReadPath = `../${dirName}`
    const baseWritePath = `./learningpath/${dirName}`
    mkdirSync(baseWritePath)

    translations.concat('' /* The English original */).forEach(async (translation) => {
      const isTranslation = translation !== ''
      const writePath = join(baseWritePath, translation)
      mkdirSync(writePath)

      const readPath = join(baseReadPath, translation)
      const articles = getArticleFiles(readPath)
      articles.forEach(async (article) => {
        const articleTitle = article.asciiDoc.match(/== (.*)/)[1]
        const articleNumber = article.filePath.split('/').pop().split('-')[0]
        const fileName = articleNumber === '01' ? `${writePath}/index.md` : `${writePath}/${articleNumber}.md`
        const contributors = await getContributors(article.filePath.replace('../', ''))
        const frontMatter = {
          layout: 'learning-path-page',
          show_meta: false,
          title: `Learning Path - ${learning_path_group} - ${articleTitle}`,
          learning_path_article: renderArticles || isTranslation ? article.filePath.replace('../', '') : undefined,
          learning_path_group,
          learning_path_menu_title: `${articleNumber} - ${articleTitle}`,
          learning_path_position: parseInt(articleNumber),
          learning_path_translation: translation,
          no_video: isTranslation, // Videos not available translated.
          contributors
        }

        writeMarkdownFile(fileName, frontMatter)
      })

      // Workbooks not translated.
      if (!isTranslation) {
        const workbookFileName = `${writePath}/workbook.md`
        const contributors = await getContributors(`workbook/${workbook}`)
        console.log('workbookFileName', workbookFileName)
        const workbookFrontMatter = {
          layout: 'learning-path-page',
          show_meta: false,
          title: `Learning Path - ${learning_path_group} - Workbook`,
          learning_path_article: `workbook/${workbook}`,
          learning_path_group,
          learning_path_menu_title: `${learning_path_group} Workbook`,
          learning_path_position: articles.length - articles.filter(Array.isArray).length + 1,
          learning_path_translation: translation,
          no_video: true,
          contributors
        }

        writeMarkdownFile(workbookFileName, workbookFrontMatter)
      }
    })
  })
})()
