module.exports = (res, db, name, fs) => {
  let idDetails = getIdDetails(db, name)
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
    res.write(idDetails)
    res.end()
  })
}

function getIdDetails (database, id) {
  let buildedHtml = ''

  if (database.length !== 0) {
    for (let entry of database) {
      if (entry.Id === id) {
        let generatedAjaxReq = ajaxStateReq(entry)
        let commentPost = ajaxCommentReq(entry)
        buildedHtml += `<p><span>ID: ${entry.Id}</span><br>\
                        <span>Title: ${entry.Title}</span><br>\
                        ${entry.Image ? `<p><img src="${entry.Image}"></p>` : ''}\
                        <span>Description: ${entry.Description}</span><br>\
                        <span>State: ${entry.State}</span><br>\
                        <span>Comments: ${entry.CommentArr}</span>
                        </p>
                        <button id="state" name="entryId" value="${entry.Id}" onclick=submitForm()>${entry.State}</button>
                        ` + generatedAjaxReq + `
                        <br><textarea type="text" id="comment"></textarea><br>
                        <button id="postComment" onclick=submitComment()>Add Comment</button>
                        <p id="result"></p>
                        ` + commentPost
      }
    }
  } else {
    buildedHtml += '<h4>No such todo</h4>'
  }
  return buildedHtml
}

function ajaxStateReq (entry) {
  return `<script>
              (function(){
                if ("${entry.State}" === "Done"){
                document.getElementById('state').innerText = "Mark as Pending"
              } else {
                document.getElementById('state').innerText = "Mark as Done"
              }
            })();
            function submitForm() {
                var http = new XMLHttpRequest();
                http.open("POST", "/details/${entry.Id}", true);
                http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                var params = "entryId=${entry.Id}"
                http.send(params);
                http.onload = function() {
                    location.reload();
                }
            }
            </script>`
}

function ajaxCommentReq (entry) {
  return `<script>
            function submitComment() {
                var http = new XMLHttpRequest();
                http.open("POST", "/details/1/comment", true);
                http.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                let comment = document.getElementById('comment').value
                console.log(comment)
                var params = "commentEntry="+comment
                http.send(params);
                http.onload = function() {
                    document.getElementById("result").innerHTML = http.responseText
                    location.reload()
                }
            }
            </script>`
}
