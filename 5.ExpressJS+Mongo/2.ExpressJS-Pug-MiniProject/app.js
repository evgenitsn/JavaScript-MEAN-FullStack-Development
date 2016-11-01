let express = require('express')
let path = require('path')
let favicon = require('serve-favicon')
let logger = require('morgan')
let cookieParser = require('cookie-parser')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/test')
        .then(() => {
          console.log('Mongo up and running')
        })

let addImage = require('./routes/add-image')
let listPictures = require('./routes/list-pictures')
let searchByTag = require('./routes/search-by-tag')
let searchInPeriod = require('./routes/search-in-period')

let app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'jade')

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.locals.dateFormat = require('./date-format')
app.use('/list', listPictures)
app.use('/', addImage)
app.use('/search-by-tag', searchByTag)
app.use('/search-in-period', searchInPeriod)

module.exports = app
