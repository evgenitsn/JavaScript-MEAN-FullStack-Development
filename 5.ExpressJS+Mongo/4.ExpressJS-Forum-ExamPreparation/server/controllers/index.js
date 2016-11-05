const homeController = require('./home-controller')
const usersController = require('./users-controller')
const threadsController = require('./articles-controller')
const adminController = require('./admin-controller')

module.exports = {
  home: homeController,
  users: usersController,
  threads: threadsController,
  admin: adminController
}
