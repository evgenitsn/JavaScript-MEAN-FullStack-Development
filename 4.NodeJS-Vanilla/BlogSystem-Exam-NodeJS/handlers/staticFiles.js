module.exports = (res, fs, pathname) => {
  fs.readFile(`./content/${pathname}`, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('Not found')
      res.end()
      return
    }

    let contentType = 'text/plain'

    if (pathname.toLowerCase().endsWith('.css')) contentType = 'text/css'
    else if (pathname.toLowerCase().endsWith('.html')) contentType = 'text/html'
    else if (pathname.toLowerCase().endsWith('.png')) contentType = 'image/png'
    else if (pathname.toLowerCase().endsWith('.jpg')) contentType = 'image/jpeg'
    else if (pathname.toLowerCase().endsWith('.gif')) contentType = 'image/gif'
    else if (pathname.toLowerCase().endsWith('.js')) contentType = 'application/javascript'
    else {
      res.writeHead(404)
      res.write('Format not supported')
      res.end()
      return
    }

    res.writeHead(200, {
      'Content-Type': contentType
    })

    res.write(data)
    res.end()
  })
}
