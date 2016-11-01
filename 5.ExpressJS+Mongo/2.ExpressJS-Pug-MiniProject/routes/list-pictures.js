let express = require('express')
let router = express.Router()
let instanodeDbGetPics = require('../instanodeDb').getPictures


router.get('/', (req, res, next) => {
  instanodeDbGetPics()
    .then((images) => {
      res.render('list', { images: images })
    })
    .catch((err) => {
      if (err) throw err
    })
})

module.exports = router
