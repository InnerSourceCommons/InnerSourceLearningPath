const fs = require('fs')
const YAML = require('yaml')
const { join } = require('path')

const target = process.argv[2]

const urlsFile = fs.readFileSync(join('..', 'config', 'urls.yaml'), 'utf8')
const urls = YAML.parse(urlsFile).map(({ video, article }) => [video, article]).flat()

const getArticleFiles = (path, translation) => {
  return fs.readdirSync(path, { withFileTypes: true }).map((dirent) => {
    const filePath = join(path, dirent.name)
    if (dirent.isDirectory()) {
      console.log(JSON.stringify(dirent))
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

articleFiles.forEach(({ asciiDoc, filePath, translation }) => {
  const match = [...asciiDoc.matchAll(/https:\/\/innersourcecommons\.org\/([\w\-]+\/)?learn\/learning-path\/([\w\-]+)(\/[\w\-]+)/gm)]
  if (match.length > 0) {
    console.log(filePath)
    match.forEach(match => console.log(JSON.stringify(match)))
    console.log('************************************\n\n')
  } else {
    console.log('no match')
  }
})

const substituted = articleFiles.map((articleFile) => {
  let asciiDoc = articleFile.asciiDoc

  urls.forEach((urlObj) => {
    const targetUrl = urlObj[target]
    if (targetUrl) {
      Object.keys(urlObj).forEach((platform) => {
        const url = urlObj[platform]
        if (url && platform !== target) {
          asciiDoc = asciiDoc.split(url).join(targetUrl)
        }
      })
    }
  })

  return {
    filePath: articleFile.filePath,
    asciiDoc
  }
})

// substituted.forEach(substitutedArticle => console.log(substitutedArticle.filePath))
