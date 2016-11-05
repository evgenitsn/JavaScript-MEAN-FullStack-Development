const path = require('path')
const rootPath = path.normalize(path.join(__dirname, '/../../'))
const port = process.env.port || 1233

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/examprep',
    port: port
  },
  production: {}
}
