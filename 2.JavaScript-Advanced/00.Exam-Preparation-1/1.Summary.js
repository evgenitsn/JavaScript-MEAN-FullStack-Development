/*eslint no-undef: */
//noinspection Eslint
function solve (selector) {
  $(selector).click(function () {
    let content = $('#content')
    let text = content.find('strong').text()
    let summary = $(`<div id="summary">
    <h2>Summary</h2>
    <p>${text}</p>
  </div>`)
    content.parent().append(summary)
  })
}