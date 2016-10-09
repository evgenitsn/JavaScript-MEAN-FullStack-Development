let uniqueID = 1
module.exports = (req, res, qs, db, fs, multiparty) => {
  if (!fs.existsSync('./content/images')) {
    fs.mkdirSync('./content/images')
  }
  let form = new multiparty.Form({
    autoFiles: true,
    uploadDir: './content/images'
  })

  form.parse(req, function (err, todo, files) {
    if (err) return console.error(err)
    if (!todo.title[0] || !todo.description[0]) {
      var html = `<html>
      Title and description are required <br> 
      Go <a href="/create">back</a> to create post, sorry!`
      res.writeHead(200)
      res.write(html)
      res.end()
      return
    }

    let newTodo = {
      'Id': String(uniqueID),
      'Title': todo.title[0],
      'Description': todo.description[0],
      'CommentArr': [],
      'DateCreated': toJSONLocal(new Date()),
      'Views': Number(0),
      'Status': 'Active',
      'Image': files.img[0].size === 0 && files.img[0].originalFilename === ''
        ? null
        : (files.img[0].path).slice(8, files.img[0].path.lenght)

    }
    console.log(newTodo)
    db.push(newTodo)
    res.writeHead(302, {location: '/create'})
    res.end()
    uniqueID++
  })

  function toJSONLocal (d) {
    var local = new Date(d)
    local.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' +
    d.getHours() + ':' + d.getMinutes()
  }
}
