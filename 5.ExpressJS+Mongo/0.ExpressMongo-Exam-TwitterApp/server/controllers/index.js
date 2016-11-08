const usersController = require('./users-controller')
const tweetsController = require('./tweets-controller')
const adminController = require('./admin-controller')

module.exports = {
  users: usersController,
  tweets: tweetsController,
  admin: adminController
}
