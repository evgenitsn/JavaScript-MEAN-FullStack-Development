let express = require('express')
let router = express.Router()
let instanodeDbSearchInPeriod = require('../instanodeDb').searchInPeriod

router.post('/', (req, res, next) => {
  let startDate = req.body.start
  let endDate = req.body.end
  instanodeDbSearchInPeriod(startDate, endDate, function (images) {
    res.render('list', { images: images })
  })
})

router.get('/', (req, res, next) => {
  res.render('search-in-period')
})

module.exports = router
