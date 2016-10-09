module.exports = (res, fs) => {
  fs.readFile('../favicon.ico', (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('Not Found')
      res.end()
    }

    res.writeHead(200)
    res.write(data)
    res.end()
  })
}
