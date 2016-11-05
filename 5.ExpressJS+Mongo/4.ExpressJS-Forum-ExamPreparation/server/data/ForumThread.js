const mongoose = require('mongoose')
const requiredValidationMessage = '{PATH} is required'
const autoIncrement = require('mongoose-auto-increment')

let threadSchema = mongoose.Schema({
  title: { type: String, required: requiredValidationMessage },
  content: { type: String, required: requiredValidationMessage },
  author: { type: String, require: requiredValidationMessage },
  authorID: { type: String, require: requiredValidationMessage },
  date: { type: Date, require: requiredValidationMessage },
  lastCommented: { type: Date, require: requiredValidationMessage },
  counter: { type: Number, default: 0 },
  comments: [{
    author: { type: String },
    content: { type: String, require: requiredValidationMessage },
    date: { type: Date }
  }]
})

threadSchema.plugin(autoIncrement.plugin, { model: 'ForumThread', field: 'threadId', startAt: 1 })
// threadSchema.plugin(require('mongoose-paginate'))
mongoose.model('ForumThread', threadSchema)
