(async() => {
  const writeMarkdownFile = require('./write_markdown_file')
  const generate = require('./generate_learning_path_markdown')

  const generatorFn = ({ isTranslation, writePath, articleNumber, translation, articleTitle, contributors, section, article}) => {
    const fileName = articleNumber === '01' ? `${writePath}/index.md` : `${writePath}/${articleNumber}.md`

    const frontMatter = {
      layout: 'learning-path-page',
      show_meta: false,
      title: `Learning Path - ${section.learning_path_group} - ${articleTitle}`,
      learning_path_article: section.renderArticles || isTranslation ? article.filePath.replace('../', '') : undefined,
      learning_path_group: section.learning_path_group,
      learning_path_menu_title: `${articleNumber} - ${articleTitle}`,
      learning_path_position: parseInt(articleNumber),
      learning_path_translation: translation,
      no_video: isTranslation, // Videos not available translated.
      contributors
    }

    writeMarkdownFile(fileName, frontMatter)
  }

  const workbookFn = ({ workbookFileName, contributors, section, workbookPosition }) => {
    const workbookFrontMatter = {
      layout: 'learning-path-page',
      show_meta: false,
      title: `Learning Path - ${section.learning_path_group} - Workbook`,
      learning_path_article: `workbook/${section.workbook}`,
      learning_path_group: section.learning_path_group,
      learning_path_menu_title: `${section.learning_path_group} Workbook`,
      learning_path_position: workbookPosition,
      no_video: true,
      contributors
    }

    writeMarkdownFile(workbookFileName, workbookFrontMatter)
  }

  generate('learningpath', generatorFn, workbookFn, true)
})()
