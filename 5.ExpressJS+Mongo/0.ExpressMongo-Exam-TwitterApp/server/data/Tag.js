const mongoose = require('mongoose')
const requiredValidationMessage = '{PATH} is required'

let tagSchema = mongoose.Schema({
  name: { type: String, required: requiredValidationMessage }
})

mongoose.model('Tag', tagSchema)
