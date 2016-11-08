const mongoose = require('mongoose')
const requiredValidationMessage = '{PATH} is required'

let tweetSchema = mongoose.Schema({
  content: { type: String, maxlength: 140, required: requiredValidationMessage },
  author: { type: Object, required: requiredValidationMessage },
  tags: { type: [String] },
  handlers: { type: [String] },
  date: { type: Date, default: new Date() },
  views: { type: Number, default: 0 },
  likes: { type: Number, default: 0 }
})

mongoose.model('Tweet', tweetSchema)
