/*eslint no-undef: */
//noinspection Eslint
function search () {
  let $ = require('jquery')
  let searchText = $('#searchText').val()
  let matches = 0
  $('#towns').find('li').each((index, item) => {
    if (item.textContent.includes(searchText)) {
      $(item).css('font-weight', 'bold')
      matches++
    } else {$(item).css('font-weight', '')}
  })
  $('#getFibs').text(`${matches} matches found.`)
}
