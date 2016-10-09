module.exports = (res, fs, pathname) => {
  fs.readFile(`./content/${pathname}`, (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('Not found')
      res.end()
      return
    }

    let contentType = 'text/plain'

    if (pathname.endsWith('.css')) contentType = 'text/css'
    else if (pathname.endsWith('.html')) contentType = 'text/html'
    else if (pathname.endsWith('.JPG')) contentType = 'image/jpeg'
    else if (pathname.endsWith('.js')) contentType = 'application/javascript'
    else {
      res.writeHead(404)
      res.write('Format not supported')
      res.end()
    }

    res.writeHead(200, {
      'Content-Type': contentType
    })

    res.write(data)
    res.end()
  })
}
