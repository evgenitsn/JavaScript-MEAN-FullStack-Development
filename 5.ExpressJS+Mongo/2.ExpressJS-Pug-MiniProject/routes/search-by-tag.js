let express = require('express')
let router = express.Router()
let instanodeDbSearchByTag = require('../instanodeDb').searchByTag

router.post('/', (req, res, next) => {
  let searchTag = req.body.searchByTag
  instanodeDbSearchByTag(searchTag, function (images) {
    res.render('list', { images: images })
  })
})

router.get('/:searchTag', (req, res, next) => {
  let searchTag = req.params.searchTag
  instanodeDbSearchByTag(searchTag, function (images) {
    res.render('list', { images: images })
  })
})

module.exports = router
