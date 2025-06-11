import fs  from 'fs'

export default function (dir) {
  try {
    fs.mkdirSync(dir)
  } catch (e) {
    if (e.code !== 'EEXIST') {
      console.log(e)
    }
  }
}