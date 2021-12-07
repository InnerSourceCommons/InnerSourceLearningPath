const fs = require('fs')
const { join } = require('path')

const getArticleFiles = (path, translation) => {
  return fs.readdirSync(path, { withFileTypes: true }).map((dirent) => {
    const filePath = join(path, dirent.name)
    if (dirent.isDirectory()) {
      return getArticleFiles(filePath, dirent.name)
    } else {
      return {
        filePath,
        asciiDoc: fs.readFileSync(filePath, 'utf-8'),
        translation
      }
    }
  }).flat()
}
const articleFiles = [getArticleFiles(join('..', 'introduction')), getArticleFiles(join('..', 'product-owner')), getArticleFiles(join('..', 'trusted-committer')), getArticleFiles(join('..', 'contributor'))].flat()

const articleTranslationExists = (section, translation, segment) => {
  const searchTerm = join('..', section, translation, segment)
  return !!articleFiles.find(file => file.filePath.startsWith(searchTerm))
}

articleFiles.forEach(({ asciiDoc, filePath, translation }) => {
  if (!translation) return

  const matches = [...asciiDoc.matchAll(/https:\/\/innersourcecommons\.org\/([\w\-]+\/)?learn\/learning-path\/([\w\-]+)\/([\w\-]+)/gm)]
  matches.forEach((match) => {
    const url = match[0]
    const linkedTranslation = match[1] ? match[1].replace('/', '') : ''
    const section = match[2]
    const segment = match[3]

    // Link to translation if exists
    if (translation !== linkedTranslation && articleTranslationExists(section, translation, segment)) {
      asciiDoc = asciiDoc.replace(url, `https://innersourcecommons.org/${translation}/learn/learning-path/${section}/${segment}`)
    }

    // Link to default if does not exist
    if (translation === linkedTranslation && !articleTranslationExists(section, translation, segment)) {
      asciiDoc = asciiDoc.replace(url, `https://innersourcecommons.org/learn/learning-path/${section}/${segment}`)
    }

  })
  fs.writeFileSync(filePath, asciiDoc)
})