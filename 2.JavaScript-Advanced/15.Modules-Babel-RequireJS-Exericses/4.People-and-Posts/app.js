/*eslint no-undef: */
(function () {
  let Person = require('./models/Person.js')
  let Post = require('./models/Post.js')

  let aleks = new Person('Aleks', 30)
  let post = new Post('Neshto si', 'Text wow', 'Aleks')

  aleks.addToSelector('#test')
  post.addToSelector('.posts.Aleks')
})()

result.Person = require('./models/Person')
result.Post = require('./models/Post')