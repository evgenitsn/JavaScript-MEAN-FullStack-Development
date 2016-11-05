let User = require('mongoose').model('User')

module.exports = {
  all: (req, res) => {
    User.find({ roles: 'Admin' })
      .then(c => res.render('admins/all-admins', { admins: c }))
  },
  add: (req, res) => {
    res.render('admins/add-admin')
  },
  addPost: (req, res) => {
    let addedAdmin = req.body.addedAdmin
    let removedAdmin = req.body.removedAdmin
    if (addedAdmin) {
      User.findOne({ username: addedAdmin })
        .then(c => {
          c.roles.push('Admin')
          c.save()
          res.render('admins/add-admin')
        })
    } else if (removedAdmin) {
      User.findOne({ username: removedAdmin })
        .then(c => {
          c.roles = []
          c.save()
          res.render('admins/add-admin')
        })
    } else {
      res.render('admins/add-admin')
    }
  }
}
