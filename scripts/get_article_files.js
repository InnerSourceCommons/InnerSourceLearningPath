const fs = require('fs')
const { join } = require('path')

module.exports = getArticleFiles = (path) => {
  return fs.readdirSync(path).reduce((articles, filename) => {
    const filePath = join(path, filename)
    if (filePath.match(/\d\d/) && !filePath.includes('-script.asciidoc')) {
      return [...articles, {
        filePath,
        asciiDoc: fs.readFileSync(filePath, 'utf-8')
      }]
    } else {
      return articles
    }
  }, [])
}