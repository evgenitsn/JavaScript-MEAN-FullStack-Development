let mongoose = require('mongoose')
let Schema = mongoose.Schema

let tag = new Schema({
  name: { type: String, required: true, minLength: 5 },
  createdOn: { type: Date, default: Date.Now },
  image: [Schema.Types.ObjectId]
})

module.exports = mongoose.model('TagModel', tag, 'tags')
