let ImageModel = require('./models/image')
let TagModel = require('./models/tag')

module.exports.saveImage = (img) => {
  let newImage = new ImageModel({
    url: img.url,
    createdOn: img.createdOn,
    description: img.description,
    tags: img.tags
  })
  newImage
    .save((err, image) => {
      if (err) throw err

      if (img.tags.length !== 0) {
        for (let i = 0; i < img.tags.length; i++) {
          TagModel.findOne({
            name: img.tags[i]
          })
            .exec((err, tag) => {
              if (err) throw err
              if (tag === null) {
                let newTag = new TagModel({
                  name: img.tags[i],
                  createdOn: new Date(),
                  image: [image._id]
                })
                newTag.save()
              } else {
                TagModel.update(
                  { name: img.tags[i] },
                  {
                    $push: { image: image._id }
                  })
                  .exec((err, result) => {
                    if (err) throw err
                  })
              }
            })
        }
      }
    })
}
/*
 if (img.tags.length !== 0) {
 ImageModel
 .find({ tags: { $in: img.tags } })
 .exec((err, result) => {
 if (err) throw err
 console.log(result)
 })
 }
 */

module.exports.getPictures = () => {
  return new Promise((resolve, reject) => {
    ImageModel
      .find()
      .then((images) => {
        resolve(images)
      })
  })
}

module.exports.searchByTag = (tag, cb) => {
  ImageModel
    .find({ tags: { $in: [tag] } })
    .sort('-createdOn')
    .exec((err, images) => {
      if (err) throw err
      cb(images)
    })
}

module.exports.searchInPeriod = (start, end, cb) => {
  ImageModel
    .find()
    .where('createdOn').gt(start)
    .where('createdOn').lt(end)
    .exec((err, images) => {
      if (err) throw err
      cb(images)
    })
}
