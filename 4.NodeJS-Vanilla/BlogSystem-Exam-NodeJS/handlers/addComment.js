module.exports = (req, res, db, qs, id) => {
  let body = ''
  req.on('data', (data) => {
    body += data
  })

  req.on('end', () => {
    let data = qs.parse(body)
    console.log(data)
    if (!data.commentEntry || !data.username) {
      res.writeHead(400)
      res.write('Comment or Username is empty')
      res.end()
      return
    }

    for (let entry of db) {
      console.log(entry)
      if (entry.Id === id) {
        entry.CommentArr.push({
          username: data.username,
          comment: data.commentEntry,
          dateCreated: toJSONLocal(new Date())
        })
      }
    }
    res.end('Comment Added')
  })
  
  function toJSONLocal (d) {
    var local = new Date(d)
    local.setMinutes(d.getMinutes() - d.getTimezoneOffset())
    return d.getDate() + '-' + (d.getMonth() + 1) + '-' + d.getFullYear() + ' ' +
d.getHours() + ':' + d.getMinutes()
  }
}
