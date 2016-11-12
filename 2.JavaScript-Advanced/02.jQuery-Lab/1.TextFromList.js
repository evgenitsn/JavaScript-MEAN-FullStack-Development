/*eslint no-undef: */
//noinspection Eslint
function extractText() {
  let items = $('ul#items li')
      .toArray()
      .map(li => li.textContent)
      .join(', ')
  $('#solve').text(items)
}
