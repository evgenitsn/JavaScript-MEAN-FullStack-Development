let encryption = require('../utilities/encryption')
let User = require('mongoose').model('User')
let Tweet = require('mongoose').model('Tweet')

module.exports = {
  register: (req, res) => {
    res.render('users/register')
  },
  create: (req, res) => {
    let user = req.body
    if (user.password !== user.confirmPassword) {
      user.globalError = 'Passwords do not match'
      res.render('users/register', user)
    } else {
      user.salt = encryption.generateSalt()
      user.hashedPass = encryption.generateHashedPassword(user.salt, user.password)
      user.userThreads = []
      user.userComments = []
      User.findOne({ username: user.username }, function (err, exist) {
        if (exist && !err) {
          console.log('Here')
          res.redirect('/users/register')
        } else {
          User
            .create(user)
            .then(user => {
              req.logIn(user, (err, user) => {
                if (err) {
                  res.render('users/register', { globalError: 'Ooops 500' })
                  return
                }
                res.redirect('/')
              })
            })
        }
      })
    }
  },
  login: (req, res) => {
    res.render('users/login')
  },
  authenticate: (req, res) => {
    let inputUser = req.body
    User
      .findOne({ username: inputUser.username })
      .then(user => {
        if (!user || !user.authenticate(inputUser.password)) {
          res.render('users/login', { globalError: 'Invalid username or password' })
        } else {
          req.logIn(user, (err, user) => {
            if (err) {
              res.render('users/login', { globalError: 'Ooops 500' })
              return
            }
            res.redirect('/profile/' + inputUser.username)
          })
        }
      })
  },
  logout: (req, res) => {
    req.logOut()
    res.redirect('/')
  },
  profile: (req, res) => {
    let username = req.params.username
    User.find({ username: username })
      .then(u => {
        Tweet
          .find({ $or: [{ 'author.username': username }, { handlers: '@' + username.toLowerCase() }] })
          .limit(100)
          .then(c => {
            res.render('users/profile', {
              info: c,
              user: u,
              currUser: res.locals.allUser,
              adminStatus: req.user ? req.user.roles.indexOf('Admin') > -1 : undefined
            })
          })
      })
  }
}
