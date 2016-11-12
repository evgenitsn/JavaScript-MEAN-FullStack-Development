/*eslint no-undef: */
//noinspection Eslint
let createBook = (function createBook() {
  let bookId = 1
  return function (selector, title, author, isbn) {
    $(selector)
      .append($('<div>')
      .attr('id', `book${bookId++}`)
      .append($('<p>').addClass('title').text(title))
      .append($('<p>').addClass('author').text(author))
      .append($('<p>').addClass('isbn').text(isbn))
      .append($('<button>').text('Select')
        .click(function () {
          $(this).parent().css('border', '2px solid blue')
        }))
      .append($('<button>').text('Deselect')
        .click(function () {
          $(this).parent().css('border', 'none')
        })))
  }
})()