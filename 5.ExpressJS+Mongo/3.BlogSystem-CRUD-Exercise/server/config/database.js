const mongoose = require('mongoose')
const autoIncrement = require('mongoose-auto-increment')
mongoose.Promise = global.Promise

module.exports = (config) => {
  mongoose.connect(config.db)
  let db = mongoose.connection
  autoIncrement.initialize(db)
  db.once('open', (err) => {
    if (err) throw err
    console.log('MongoDB up and running')
  })
  db.on('error', (err) => console.log('Database error: ' + err))

  require('../data/User').seedAdminUser()
  require('../data/Article')
}
