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
        .then(u => {
          if (!u) return done(null, false)
          if (!u.authenticate(password)) return done(null, false)
          return done(null, u)
        })
    }))
  passport.serializeUser((user, done) => {
    done(null, user.id)
  })
  passport.deserializeUser((id, done) => {
    User.findById(id)
      .then(u => {
        done(null, u)
      })
  })
}
