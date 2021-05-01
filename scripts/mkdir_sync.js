const fs = require('fs')

module.exports = mkdirSync = (dir) => {
  try {
    fs.mkdirSync(dir)
  } catch (e) {
    if (e.code !== 'EEXIST') {
      console.log(e)
    }
  }
}