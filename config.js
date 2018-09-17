const path = require('path')
const ROOT_DIR = process.cwd()
const CLIENT_DIR = path.resolve(ROOT_DIR, './client')
const PUBLIC_DIR = path.resolve(ROOT_DIR, './public')

module.exports = {
  ROOT_DIR,
  CLIENT_DIR,
  PUBLIC_DIR
}
