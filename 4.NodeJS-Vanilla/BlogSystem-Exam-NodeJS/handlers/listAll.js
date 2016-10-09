module.exports = (res, fs, db) => {
  fs.readFile('./content/partial-head.html', (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('Not Found')
      res.end()
    }
    let response = allTodos(db, fs)
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(data)
    res.write(response)
    res.end()
  })
}

function compare (a, b) {
  return new Date(b.date) - new Date(a.date)
}

function allTodos (db, filesystem) {
  let buildedHtml = ''

  if (db.length !== 0) {
    db.sort(compare)
    for (let entry of db) {
      if (entry.Status !== 'Deleted') {
        buildedHtml += `<p><b>ID:</b> ${entry.Id}<br>
                       <b>Title:</b> ${entry.Title}<br>
                       <b>Date:</b> ${entry.DateCreated}<br>
                       <b>Views:</b> ${entry.Views}<br>
                        <a href=/details/${entry.Id}><b>See more</b></a></p>`
      }
    }
  } else {
    buildedHtml += `<h4>No Entries</h4>
                      <p>You can <a href="/create"><b>Add Post here</b></a></p>`
  }
  return buildedHtml
}
