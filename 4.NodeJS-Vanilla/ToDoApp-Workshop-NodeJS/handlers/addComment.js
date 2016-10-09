module.exports = (req, res, db, qs) => {
  let body = ''

  req.on('data', (data) => {
    body += data
  })

  req.on('end', () => {
    let data = qs.parse(body)
    console.log(data)
    if (!data.commentEntry) {
      res.writeHead(400)
      res.write('Comment is empty')
      res.end()
      return
    }

    for (let entry of db) {
      console.log(entry)
      if (entry.Id === String(1)) {
        entry.CommentArr.push(data.commentEntry)
      }
    }
    res.end('Comment Added')
    console.log(db)
  })
}
