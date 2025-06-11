import fs from 'fs'
import { join } from 'path'

export default function (path) {
  return fs.readdirSync(path).reduce((articles, filename) => {
    const filePath = join(path, filename)
    if (filePath.match(/\d\d[-\w]+(?<!script)\.asciidoc/)) {
      return [...articles, {
        filePath,
        asciiDoc: fs.readFileSync(filePath, 'utf-8')
      }]
    } else {
      return articles
    }
  }, [])
}
