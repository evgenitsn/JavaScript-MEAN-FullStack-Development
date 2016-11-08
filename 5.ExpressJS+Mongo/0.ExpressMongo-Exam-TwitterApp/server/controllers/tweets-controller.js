let Tweet = require('mongoose').model('Tweet')
let Tag = require('mongoose').model('Tag')
let auth = require('../config/auth')
module.exports = {
  index: (req, res) => {
    let conditions = {}
    let update = { $inc: { views: 1 } }
    let options = { multi: true }

    Tweet
      .update(conditions, update, options)
      .limit(100)
      .exec()
      .then(Tweet
        .find({})
        .limit(100)
        .then(tweets => res.render('home/index', {
          list: tweets,
          adminStatus: req.user ? req.user.roles.indexOf('Admin') > -1 : undefined,
          user: res.locals.allUser
        })))
  },
  add: (req, res) => {
    res.render('tweets/add')
  },
  create: (req, res) => {
    let tweetData = req.body
    tweetData.author = req.user
    tweetData.content = req.body.content
    tweetData.handlers = extractHandles(tweetData.content)
    tweetData.tags = extractTags(tweetData.content)
    function extractTags (tweet) {
      let tags = []
      for (let word of tweet.split(/,|\.| |!|\?+/g)) {
        if (word.startsWith('#')) {
          word = word.toLowerCase()
          tags.push(word)
        }
      }
      return tags
    }
    function extractHandles (tweet) {
      let handles = []
      for (let word of tweet.split(/,|\.| |!|\?+/g)) {
        if (word.startsWith('@')) {
          // word = word.toLowerCase()
          handles.push(word)
        }
      }
      return handles
    }

    for (let tag of tweetData.tags) {
      let tagObj = {}
      tagObj.name = tag
      Tag
        .findOne({ name: tag })
        .then(c => {
          if (c === null) {
            Tag
              .create(tagObj)
          }
        })
    }
    Tweet
      .create(tweetData)
      .then(c => {
        console.log(c)
        res.redirect('/')
      })
  },
  tagname: (req, res) => {
    let tagname = req.params.tagname
    Tag.findOne({ name: '#' + tagname.toLowerCase() })
      .then(tag => {
        if (tag) {
          Tweet
            .find({ tags: tag.name })
            .limit(100)
            .then(c => {
              res.render('tweets/taglist', {
                info: c,
                currUser: res.locals.currentUser,
                counter: c.length
              })
            })
        } else {
          res.render('tweets/taglist', {
            info: []
          })
        }
      })
  },
  editId: (req, res) => {
    let id = req.params.id
    Tweet.findOne({ _id: id })
      .then(c => res.render('tweets/edit', {
        info: c
      }))
  },
  editIdPost: (req, res) => {
    let id = req.params.id
    let newContent = req.body.content

    function extractTags (tweet) {
      let tags = []
      for (let word of tweet.split(/,|\.| |!|\?+/g)) {
        if (word.startsWith('#')) {
          word = word.toLowerCase()
          tags.push(word)
        }
      }
      return tags
    }

    for (let tag of extractTags(newContent)) {
      let tagObj = {}
      tagObj.name = tag
      Tag
        .findOne({ name: tag })
        .then(c => {
          if (c === null) {
            Tag
              .create(tagObj)
          }
        })
    }

    Tweet.findOne({ _id: id })
      .then(c => {
        c.content = newContent
        c.tags = extractTags(newContent)
        c.save()
      })
      .then(res.redirect('/'))
  },
  deleteIdPost: (req, res) => {
    let id = req.params.id
    Tweet.findOne({ _id: id })
      .then(c => {
        c.remove()
        c.save()
      })
      .then(res.redirect('/'))
  },
  likePost: (req, res) => {
    let id = req.params.id
    console.log(id)
    Tweet.findOne({ _id: id })
      .then(c => {
        console.log(c)
        c.likes += 1
        c.save()
      })
      .then(res.redirect('/'))
  },
  dislikePost: (req, res) => {
    let id = req.params.id
    Tweet.findOne({ _id: id })
      .then(c => {
        c.likes -= 1
        c.save()
      })
      .then(res.redirect('/'))
  }
}
