module.exports = (res, db, name, fs) => {
  fs.readFile('./content/partial-head.html', (err, data) => {
    if (err) {
      res.writeHead(404)
      res.write('Not Found')
      res.end()
    }
    let idDetails = getIdDetails(db, name)
    res.writeHead(200, {
      'Content-Type': 'text/html'
    })
    res.write(data)
    res.write(idDetails)
    res.end()
  })
}

function getIdDetails (database, id) {
  let buildedHtml = ''

  if (database.length !== 0) {
    for (let entry of database) {
      if (entry.Id === id) {
        entry.Views = Number(entry.Views) + 1
        let generatedAjaxReq = ajaxStateReq(entry)
        let commentPost = ajaxCommentReq(entry)
        let comments = aggregateComments(entry)
        buildedHtml += `<p>
                        <span><b>Title:</b> ${entry.Title}</span><br>
                        ${entry.Image ? `<p><img src="../${entry.Image}"></p>` : ''}
                        <span><b>Description:</b> ${entry.Description}</span><br>
                        <span><b>Total Views:</b> ${entry.Views}</span><br>
                        <span><b>Status:</b> ${entry.Status}</span><br>
                        <button id="state" name="entryId" value="${entry.Id}" onclick=submitForm()>${entry.Status}</button><br>
                        
                        <span><b>Comments</b> ${comments}</span>
                        </p>
                        ` + generatedAjaxReq + `
                        <br>
                        <input type="text" id="username" placeholder="Username"/><br>
                        <textarea type="text" placeholder="Comment" id="comment"></textarea><br>
                        <button id="postComment" onclick=submitComment()>Add Comment</button>
                        <p id="result"></p>
                        ` + commentPost
      }
    }
  } else {
    buildedHtml += '<h4>No such post</h4>'
  }
  return buildedHtml
}

function ajaxStateReq (entry) {
  return `<script>
              (function(){
                if ("${entry.Status}" === "Active"){
                document.getElementById('state').innerText = "Delete"
              } else {
                document.getElementById('state').innerText = "Undelete"
              }
            })();
            function submitForm() {
                var http = new XMLHttpRequest();
                http.open("POST", "/details/${entry.Id}", true);
                http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                var params = "entryId=${entry.Id}"
                http.send(params);
                http.onload = function() {
                  document.getElementById("result").innerHTML = http.responseText
                    location.reload();
                }
            }
            </script>`
}

function ajaxCommentReq (entry) {
  return `<script>
            function submitComment() {
                var http = new XMLHttpRequest();
                http.open("POST", "/details/${entry.Id}/comment", true);
                http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                let comment = document.getElementById('comment').value
                let username = document.getElementById('username').value
                var params = "commentEntry="+comment+"&username="+username
                http.send(params);
                http.onload = function() {
                    document.getElementById("result").innerHTML = http.responseText
                    setInterval(function(){ location.reload(); }, 700);
                }
            }
            </script>`
}

function aggregateComments (entry) {
  let html = '<ul>'
  for (let prop of entry.CommentArr) {
    html += `
      <li><b>Comment:</b> ${prop.comment}</li>
      <li><b>Posted By:</b> ${prop.username}</li>
      <li><b>Date:</b> ${prop.dateCreated}</li>
      <hr>`
  }
  html += '</ul>'
  return html
}
