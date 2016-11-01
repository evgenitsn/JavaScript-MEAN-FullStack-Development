const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('mongoose').model('User')

module.exports = () => {
  passport.use('local-signup', new LocalStrategy(
    {
      usernameField: 'username',
      passwordField: 'password'
    }, (username, password, done) => {
      User
        .findOne({ username: username })
        .then(user => {
          if (!user) return done(null, false)
          if (!user.authenticate(password)) return done(null, false)

          return done(null, user)
        })
    }))

  passport.serializeUser((user, done) => {
    done(null, user.id)
  })

  passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
      done(null, user)
    })
  })
}
