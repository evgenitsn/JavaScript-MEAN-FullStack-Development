require('./handlers/master.js')
let http = require('http')
let port = 2001

http
  .createServer((req, res) => {
    require('./handlers/master')(req, res)
  })
  .listen(port, () => {
    console.log(`Listening on port: ${port}`)
  })
