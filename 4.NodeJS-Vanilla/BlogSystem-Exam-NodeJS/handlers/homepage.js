module.exports = (res, fs, db) => {
  fs.readFile('./content/index.html', (err, data) => {
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
  if (Number(a.Views) < Number(b.Views)) return 1
  if (Number(a.Views) > Number(b.Views)) return -1
  return 0
}

function allTodos (db, filesystem) {
  let buildedHtml = ''

  if (db.length !== 0) {
    db.sort(compare)
    let count = 0
    for (let entry of db) {
      if (entry.Status !== 'Deleted') {
        buildedHtml += `<p><b>ID:</b> ${entry.Id}<br>
                       <b>Title:</b> ${entry.Title}<br>
                       <b>Date:</b> ${entry.DateCreated}<br>
                       <b>Views:</b> ${entry.Views}<br>
                        <b><a href=/details/${entry.Id}>See more</a></b></p>`

        count++
        if (count === 6) {
          break
        }
      }
    }
  } else {
    buildedHtml += `<h4>No Entries</h4>
                      <p>You can <b><a href="/create"> Add Post here</a></b></p>`
  }
  return buildedHtml
}
