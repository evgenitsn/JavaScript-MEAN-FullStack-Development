let encryption = require('../utilities/encryption')
let User = require('mongoose').model('User')
let ForumThread = require('mongoose').model('ForumThread')

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

    let arr = []
    let arr2 = []
    ForumThread.find({ author: username })
      .then(c => arr.push(c))
      .then(ForumThread.find({ 'comments.author': username })
        .then(co => arr2.push(co.comments)))
      .then(User.findOne({ username: username })
        .then(u => res.render('users/profile', { user: u, threads: arr, comments: arr2 })))
  }
}
