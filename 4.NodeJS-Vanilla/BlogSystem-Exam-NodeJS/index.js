require('./handlers/master.js')
let http = require('http')
let port = 1010

http
  .createServer((req, res) => {
    require('./handlers/master')(req, res)
  })
  .listen(port, () => {
    console.log(`Listening on port: ${port}`)
  })
