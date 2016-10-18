/**
 * Created by evgeni.tsn on 17-Oct-16.
 */

let mongoose = require('mongoose')
mongoose.Promise = global.Promise
let connection = 'mongodb://localhost:27017/instanode'

let imageSchema = new mongoose.Schema({
  imageUrl: String,
  createdOn: Date,
  description: String,
  tags: [ String ]
})
let Image = mongoose.model('Image', imageSchema)

function addImage (data) {
  console.log(`data:`)
  console.log(data)
  let db = mongoose.connect(connection)
  db.then(() => {
    new Image({
      imageUrl: data.url,
      createdOn: new Date(),
      description: data.description,
      tags: data.tags
    }).save()
  })
}

function tagLookup (tag) {
  let db = mongoose.connect(connection)
  db.then(() => {
    Image.find({tags: tag})
      .sort([['createdOn', 'descending']])
       .then(console.log)
  })
}

function creationDateLookup (start, end, limit) {
  let db = mongoose.connect(connection)
  db.then(() => {
    Image.find({})
      .where('createdOn').gt(start).lt(end)
      .limit(limit || 10)
      .sort([['createdOn', 'descending']])
      .then(console.log)
  })
}

module.exports = {
  saveImage: (data) => {
    addImage(data)
  },
  findByTag: (tag) => {
    tagLookup(tag)
  },
  findBetweenDates: (start, end, limit) => {
    creationDateLookup(start, end, limit)
  }
}
