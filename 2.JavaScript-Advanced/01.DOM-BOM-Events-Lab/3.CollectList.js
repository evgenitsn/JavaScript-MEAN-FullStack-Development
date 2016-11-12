//noinspection Eslint
function extractText() {
  let itemNodes =
    document.querySelectorAll('ul#items li')
  let textarea =
    document.querySelector('#solve')
  for (let node of itemNodes) {
    textarea.value += `${node.textContent}
`
  }
}
