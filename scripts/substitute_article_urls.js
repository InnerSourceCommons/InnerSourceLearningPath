const fs = require('fs')
const YAML = require('yaml')

const target = process.argv[2]

const urlsFile = fs.readFileSync('../config/urls.yaml', 'utf8')
const urls = YAML.parse(urlsFile).map(({ video, article }) => [video, article]).flat()

const getArticleFiles = (path) => {
  return fs.readdirSync(path).map((filename) => {
    const filePath = `${path}/${filename}`
    if (fs.lstatSync(filePath).isDirectory()) {
      return getArticleFiles(filePath)
    } else {
      return {
        filePath,
        asciiDoc: fs.readFileSync(filePath, 'utf-8')
      }
    }
  }).flat()
}
const articleFiles = [getArticleFiles('../introduction'), getArticleFiles('../product-owner'), getArticleFiles('../trusted-committer'), getArticleFiles('../contributor')].flat()

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

substituted.forEach(substitutedArticle => fs.writeFileSync(substitutedArticle.filePath, substitutedArticle.asciiDoc))
