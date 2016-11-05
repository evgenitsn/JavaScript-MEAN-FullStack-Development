let ForumThread = require('mongoose').model('ForumThread')
let auth = require('../config/auth')
module.exports = {
  index: (req, res) => {
    ForumThread.find({})
      .then(articles => res.render('home/index', { list: articles }))
  },
  add: (req, res) => {
    res.render('threads/add')
  },
  create: (req, res) => {
    let forumThreadData = req.body
    forumThreadData.author = req.user.username
    forumThreadData.authorID = req.user._id
    forumThreadData.date = new Date()
    forumThreadData.comments = []

    ForumThread
      .create(forumThreadData)
      .then(res.redirect('/list'))
  },
  list: (req, res) => {
    let isAdmin = false
    if (auth.isInRole('Admin')) {
      isAdmin = true
    }
    ForumThread.find({})
      .then(articles => res.render('threads/list', { list: articles, admin: isAdmin }))
  },
  detailsId: (req, res) => {
    let id = req.params.id
    ForumThread.findOne({ threadId: req.params.id })
      .then(c => {
        c.counter++
        c.save()
      })
      .then(ForumThread.findOne({ threadId: id })
        .then(c => res.render('threads/details',
          {
            info: c,
            currUser: res.locals.currentUser,
            adminStatus: req.user ? req.user.roles.indexOf('Admin') > -1 : undefined
          })))
  },
  editId: (req, res) => {
    let id = req.params.id
    let currUser = req.user.username
    ForumThread.findOne({ threadId: id })
      .then(c => c.author === currUser || auth.isInRole('Admin') ? res.render('threads/edit', {
        info: c
      }) : res.render('error/not-permitted'))
  },
  editIdPost: (req, res) => {
    let id = req.params.id
    let newTitle = req.body.title
    let newContent = req.body.content

    ForumThread.findOne({ threadId: id })
      .then(c => {
        c.title = newTitle
        c.content = newContent
        c.save()
      })
      .then(res.redirect('/post/' + id + '/' + newTitle))
  },
  addComment: (req, res) => {
    let commentData = req.body.commentContent
    let id = req.params.id
    let title = req.params.title
    let dateNow = new Date()
    if (commentData !== '') {
      // commentData.date = new Date()
      ForumThread.findOne({ threadId: id })
        .then(c => {
          c.comments.push(
            {
              author: req.user.username,
              content: commentData,
              date: dateNow
            }
          )
          c.lastCommented = dateNow
          c.save()
        })
        .then(res.redirect('/post/' + id + '/' + title))
    } else {
      res.redirect('/post/' + id + '/' + title)
    }
  }
}
