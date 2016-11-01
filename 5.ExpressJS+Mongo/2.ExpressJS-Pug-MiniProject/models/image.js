let mongoose = require('mongoose')
let Schema = mongoose.Schema

let image = new Schema({
  url: { type: String, required: true },
  createdOn: { type: Date, default: Date.now },
  description: { type: String, required: true, minLength: 5 },
  tags: [String]
})

module.exports = mongoose.model('ImageModel', image, 'images')
