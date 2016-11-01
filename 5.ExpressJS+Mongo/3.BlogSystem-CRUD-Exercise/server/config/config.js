const path = require('path')
const rootPath = path.normalize(path.join(__dirname, '/../../'))
const port = process.env.port || 3033

module.exports = {
  development: {
    rootPath: rootPath,
    db: 'mongodb://localhost:27017/socialblogsystem',
    port: port
  },
  production: {}
}
