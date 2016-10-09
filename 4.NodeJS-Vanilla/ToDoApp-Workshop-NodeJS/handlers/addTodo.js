let uniqueID = 1
module.exports = (req, res, qs, db, fs, multiparty) => {
  let form = new multiparty.Form({
    autoFiles: true,
    uploadDir: './content'
  })

  form.parse(req, function (err, todo, files) {
    if (err) return console.error(err)
    if (!todo.Title[0] || !todo.Description[0]) {
      var html = '<h2>Title and description are required</h2>'
      html += 'Go <a href="/create">back</sa> to create form, sorry!'
      res.send(html)
      return
    }
    console.log(todo)
    let newTodo = {
      'Id': String(uniqueID),
      'Title': todo.Title[0],
      'Description': todo.Description[0],
      'State': todo.State,
      'CommentArr': [],
      'Image': files.img[0].size === 0 && files.img[0].originalFilename === ''
        ? null
        : '\\' + files.img[0].path

    }
    console.log(newTodo)
    db.push(newTodo)
    res.writeHead(302, {location: '/create'})
    res.end()
    uniqueID++
  })
}
