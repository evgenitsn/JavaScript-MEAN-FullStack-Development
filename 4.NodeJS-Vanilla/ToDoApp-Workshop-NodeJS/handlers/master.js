let fs = require('fs')
let url = require('url')
var qs = require('querystring')
let multiparty = require('multiparty')
let db = []

module.exports = (req, res) => {
  let method = req.method
  let pathname = url.parse(req.url).pathname
  if (method === 'GET') {
    if (pathname === '/favicon') {
      require('./favicon')(res, fs)
    } else if (pathname === '/') {
      require('./homepage')(res, fs)
    } else if (pathname === '/create') {
      require('./create')(res, fs)
    } else if (pathname === '/all') {
      require('./listAll')(res, fs, db)
    } else if (pathname.startsWith('/details/')) {
      require('./details')(res, db, pathname.slice(9), fs)
    } else {
      require('./staticFiles')(res, fs, pathname)
    }
  } else if (method === 'POST') {
    if (pathname === '/create') {
      require('./addTodo')(req, res, qs, db, fs, multiparty)
    } else if (pathname.endsWith('/comment')) {
      console.log('Com ' + pathname)
      require('./addComment')(req, res, db, qs)
    } else if (pathname.startsWith('/details/')) {
      console.log(pathname)
      require('./changeStatus')(req, res, db, pathname.slice(9), qs)
    }
  }

  module.exports.favicon = () => {
    require('./favicon')
  }
}

