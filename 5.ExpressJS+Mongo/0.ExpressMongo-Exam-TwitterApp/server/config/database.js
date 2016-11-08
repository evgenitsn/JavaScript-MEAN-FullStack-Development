const mongoose = require('mongoose')

mongoose.Promise = global.Promise

module.exports = (config) => {
  mongoose.connect(config.db)
  let db = mongoose.connection
  db.once('open', (err) => {
    if (err) console.log(err)
    console.log('Mongo up and running')
    console.log('Database name: evgenikolov-exam')
  })
  db.on('error', (err) => {
    console.log('DB error: ' + err)
  })

  require('../data/User').seedAdminUser()
  require('../data/Tweet')
  require('../data/Tag')
}
