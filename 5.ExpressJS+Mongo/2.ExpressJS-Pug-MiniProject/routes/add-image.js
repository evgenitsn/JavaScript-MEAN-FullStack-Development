let express = require('express')
let router = express.Router()
let instanodeDbSaveImg = require('../instanodeDb').saveImage

router.get('/', function (req, res, next) {
  res.render('add-image')
})

router.post('/', (req, res, next) => {
  let tags = req.body.tags.split(',')
  tags.forEach((value, index) => {
    tags[index] = tags[index].trim()
  })
  let createdOn = Date.parse(req.body.createdOn)
  if (isNaN(createdOn)) {
    createdOn = new Date() // if parse fails get the current date and time
  }
  let newImage = {
    url: req.body.url,
    createdOn: createdOn,
    description: req.body.description,
    tags: tags
  }
  instanodeDbSaveImg(newImage)
  res.render('add-image')
})

module.exports = router
