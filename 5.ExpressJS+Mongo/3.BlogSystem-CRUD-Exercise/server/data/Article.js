const mongoose = require('mongoose')
const requiredValidationMessage = '{PATH} is required'
const autoIncrement = require('mongoose-auto-increment')

let articleSchema = mongoose.Schema({
  title: { type: String, required: requiredValidationMessage },
  content: { type: String, required: requiredValidationMessage },
  author: { type: String, require: requiredValidationMessage },
  authorID: { type: String, require: requiredValidationMessage }
})
articleSchema.plugin(autoIncrement.plugin, {model: 'Article', field: 'articleId'})
articleSchema.plugin(require('mongoose-paginate'))
mongoose.model('Article', articleSchema)
