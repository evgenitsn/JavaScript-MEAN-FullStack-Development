module.exports = (req, res, db, fs) => {
  if (req.headers['my-authorization'] === 'Admin') {
    fs.readFile('./content/partial-head.html', (err, data) => {
      if (err) {
        res.writeHead(404)
        res.write('Not Found')
        res.end()
      }
      let response = allTodos(db, fs)
      let comments = getTotalComments(db)
      let views = getTotalView(db)
      res.writeHead(200, {
        'Content-Type': 'text/html'
      })
      // res.write(data)
      res.write('Total comments: ' + comments + '<br>')
      res.write('Total views: ' + views)
      res.write(response)
      res.end()
    })
  } else {
    res.writeHead(404)
    res.write('NO RIGHTS FOR YOU')
    res.end()
  }
}

function compare (a, b) {
  return new Date(b.date) - new Date(a.date)
}

function allTodos (db, filesystem) {
  let buildedHtml = ''

  if (db.length !== 0) {
    db.sort(compare)
    for (let entry of db) {
      buildedHtml += `<p>ID: ${entry.Id}<br>
                       Title: ${entry.Title}<br>
                       Date: ${entry.DateCreated}<br>
                       Views: ${entry.Views}<br>`
    }
  } else {
    buildedHtml += `<h4>No Entries</h4>`
  }
  return buildedHtml
}

function getTotalView (db) {
  let countViews = 0
  for (let entry of db) {
    countViews += Number(entry.Views)
  }
  return countViews
}

function getTotalComments (db) {
  let countComments = 0
  for (let entry of db) {
    countComments += Number(entry.CommentArr.length)
  }
  return countComments
}
