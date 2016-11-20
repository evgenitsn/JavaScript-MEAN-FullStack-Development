/* Submit this function to judge */
function loadCommits() {
  let commitsContainer = $('#commits')
  let userName = $('#username').val().trim()
  let repoName = $('#repo').val().trim()

  if (userName != '' && repoName != '') {
    $.get({
      url: generateApiUrl(userName, repoName)
    })
     .then(renderCommits)
     .catch(renderError)
  }

  function renderCommits(commits) {
    commitsContainer.empty()
    for (let commit of commits) {
      addListItem(commitsContainer, `${commit.commit.author.name}: ${commit.commit.message}`)
    }
  }

  function renderError(error) {
    commitsContainer.empty()
    addListItem(commitsContainer, `Error: ${error.status} (${error.statusText})`)
  }

  function addListItem(list, itemText) {
    $('<li>')
      .text(itemText)
      .appendTo(list)
  }

  function generateApiUrl(userName, repoName) {
    return `https://api.github.com/repos/${userName}/${repoName}/commits`
  }
}