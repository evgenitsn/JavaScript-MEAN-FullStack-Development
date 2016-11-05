const controllers = require('../controllers')
const auth = require('../config/auth')

module.exports = (app) => {
  app.get('/', controllers.threads.index)
  app.get('/about', controllers.home.about)

  app.get('/users/register', controllers.users.register)
  app.post('/users/register', controllers.users.create)
  app.get('/users/login', controllers.users.login)
  app.post('/users/login', controllers.users.authenticate)
  app.post('/users/logout', controllers.users.logout)

  app.get('/add', auth.isAuthenticated, controllers.threads.add)
  app.post('/add', auth.isAuthenticated, controllers.threads.create)
  app.get('/post/:id/:title', controllers.threads.detailsId)
  app.post('/addComment/:id/:title', controllers.threads.addComment)

  app.get('/edit/:id/:title', auth.isAuthenticated, controllers.threads.editId)
  app.post('/edit/:id/:title', auth.isAuthenticated, controllers.threads.editIdPost)

  app.get('/list', controllers.threads.list)

  app.get('/admins/all', auth.isInRole('Admin'), controllers.admin.all)
  app.get('/admins/add', auth.isInRole('Admin'), controllers.admin.add)
  app.post('/admins/add', auth.isInRole('Admin'), controllers.admin.addPost)

  app.get('/profile/:username', auth.isAuthenticated, controllers.users.profile)
  app.all('*', (req, res) => {
    res.status(404)
    res.render('error/not-found')
    res.end()
  })
}
