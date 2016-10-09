module.exports = (res, fs, db) => {
  let response = allTodos(db, fs)
  fs.readFile('./content/partial-head.html', (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('Not Found')
      res.end()
    }
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(data)
    res.write(response)
    res.end()
  })
}

function compare (a, b) {
  if (a.State < b.State) return 1
  if (a.State > b.State) return -1
  else return Number(a.Id) - Number(b.Id)
}

function allTodos (db, filesystem) {
  let buildedHtml = ''

  if (db.length !== 0) {
    db.sort(compare)
    for (let entry of db) {
      buildedHtml += `<p>ID: ${entry.Id}<br>\
                       Title: ${entry.Title}<br>\
                       Description: ${entry.Description}<br>\
                       State: ${entry.State}<br>\
                        <a href=/details/${entry.Id}>See more</a></p>`
    }
  } else {
    buildedHtml += '<h4>No Entries</h4>'
  }
  return buildedHtml
}
