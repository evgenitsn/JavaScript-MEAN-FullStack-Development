const controllers = require('../controllers')
const auth = require('../config/auth')
const paginate = require('express-paginate')

module.exports = (app) => {
  app.use(paginate.middleware(5, 10))
  app.get('/', controllers.home.index)
  app.get('/about', controllers.home.about)

  app.get('/users/register', controllers.users.register)
  app.post('/users/create', controllers.users.create)
  app.get('/users/login', controllers.users.login)
  app.post('/users/authenticate', controllers.users.authenticate)
  app.post('/users/logout', controllers.users.logout)

  app.get('/article/add', auth.isAuthenticated, controllers.articles.add)
  app.post('/article/create', auth.isAuthenticated, controllers.articles.create)
  app.get('/article/list', controllers.articles.list)
  app.get('/article/details/:id', auth.isAuthenticated, controllers.articles.detailsId)
  app.get('/article/edit/:id', auth.isAuthenticated, controllers.articles.editId)
  app.post('/article/edit/:id', auth.isAuthenticated, controllers.articles.editIdPost)

  app.get('/profile', auth.isAuthenticated, controllers.users.profile)

  app.all('*', (req, res) => {
    res.status(404)
    res.send('404 Not Found')
    res.end()
  })
}
