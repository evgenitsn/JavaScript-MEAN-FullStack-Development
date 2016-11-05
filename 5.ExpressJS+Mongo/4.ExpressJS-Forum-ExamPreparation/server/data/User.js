const mongoose = require('mongoose')
const encryption = require('../utilities/encryption')
const requiredValidationMessage = '{PATH} is required'

let userScheme = mongoose.Schema({
  username: { type: String, required: requiredValidationMessage, unique: true },
  firstName: { type: String, required: requiredValidationMessage },
  lastName: { type: String, required: requiredValidationMessage },
  salt: String,
  hashedPass: String,
  roles: [String]
})

userScheme.method({
  authenticate: function (password) {
    if (encryption.generateHashedPassword(this.salt, password) === this.hashedPass) {
      return true
    } else {
      return false
    }
  }
})

// Admin Seed
let User = mongoose.model('User', userScheme)
module.exports.seedAdminUser = () => {
  User.find({})
    .then((users) => {
      if (users.length === 0) {
        let salt = encryption.generateSalt()
        let hashedPass = encryption.generateHashedPassword(salt, 'Admin')
        User.create({
          'username': 'Admin',
          'firstName': 'Admin',
          'lastName': 'Adminov',
          'salt': salt,
          'hashedPass': hashedPass,
          'roles': ['Admin']
        })
      }
    })
}
