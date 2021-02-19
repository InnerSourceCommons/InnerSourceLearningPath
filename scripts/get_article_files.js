const fs = require('fs')

module.exports = getArticleFiles = (path) => {
  return fs.readdirSync(path).reduce((articles, filename) => {
    const filePath = `${path}/${filename}`
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