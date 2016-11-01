let Article = require('mongoose').model('Article')
const paginate = require('express-paginate')

module.exports = {
  add: (req, res) => {
    res.render('articles/addArticle')
  },
  create: (req, res) => {
    let articleData = req.body
    articleData.author = req.user.username
    articleData.authorID = req.user._id

    Article
      .create(articleData)
      .then(res.redirect('/article/add'))
  },
  list: (req, res) => {
    Article
      .paginate({}, {
        page: req.query.page,
        limit: req.query.limit || 5,
        sortMethod: req.query.sort
      }).then(
      result =>
        res.format({
          html: () => {
            res.render('articles/list', {
              articles: result.docs,
              pageCount: result.pages,
              itemCount: result.total,
              pages: paginate.getArrayPages(req)(10, result.pages, req.query.page)
            })
          },
          json: () => {
            // inspired by Stripe's API response for list objects
            res.json({
              object: 'list',
              has_more: paginate.hasNextPages(req)(result.pages),
              data: result.docs
            })
          }
        })
    )
    // Article.find({})
    //   .then(articles => res.render('articles/listAll', { list: articles }))
  },
  detailsId: (req, res) => {
    let id = req.params.id
    Article.findOne({ articleId: id })
      .then(c => res.render('articles/details', { info: c , currUser: res.locals.currentUser}))
  },
  editId: (req, res) => {
    let id = req.params.id
    let currUser = req.user.username
    Article.findOne({ articleId: id })
      .then(c => c.author === currUser ? res.render('articles/edit', { info: c }) : res.render('articles/notPermitted'))
  },
  editIdPost: (req, res) => {
    let id = req.params.id
    let newTitle = req.body.title
    let newContent = req.body.content

    Article.findOne({ articleId: id })
      .then(c => {
        c.title = newTitle
        c.content = newContent
        c.save()
      })
      .then(res.redirect('/article/details/' + id))
  }
}
