const controllers = require('../controllers')
const auth = require('../config/auth')

module.exports = (app) => {
  app.get('/', controllers.tweets.index)

  app.get('/users/register', controllers.users.register)
  app.post('/users/register', controllers.users.create)
  app.get('/users/login', controllers.users.login)
  app.post('/users/login', controllers.users.authenticate)
  app.post('/users/logout', controllers.users.logout)

  app.get('/tweet', auth.isAuthenticated, controllers.tweets.add)
  app.post('/tweet', auth.isAuthenticated, controllers.tweets.create)
  app.get('/tag/:tagname', controllers.tweets.tagname)

  app.get('/edit/:id', auth.isInRole('Admin'), controllers.tweets.editId)
  app.post('/edit/:id', auth.isInRole('Admin'), controllers.tweets.editIdPost)
  app.post('/delete/:id', auth.isInRole('Admin'), controllers.tweets.deleteIdPost)

  app.post('/like/:id', auth.isAuthenticated, controllers.tweets.likePost)
  app.post('/dislike/:id', auth.isAuthenticated, controllers.tweets.dislikePost)

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
