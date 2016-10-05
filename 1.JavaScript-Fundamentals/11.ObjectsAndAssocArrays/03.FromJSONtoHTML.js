function JSONToHTMLTable ([json]) {
  let html = '<table>\n'
  let arr = JSON.parse(json)
  html += '  <tr>'
  for (let key of Object.keys(arr[0])) {
    html += `<th>${htmlEscape(key)}</th>`
  }
  html += '</tr>\n'
  for (let obj of arr) {
    html += '  <tr>'
    for (let propName in obj) {
      let propValue = String(obj[propName])
      html += `<td>${htmlEscape(propValue)}</td>`
    }
    html += '</tr>\n'
  }
  function htmlEscape (text) {
    let map = {
      '"': '&quot;',
      '&': '&amp;',
      "'": '&#39;',
      '<': '&lt;',
      '>': '&gt;' }
    return text.replace(/["&'<>]/g, ch => map[ch])
  }
  return html + '</table>'
}
console.log(JSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']))
