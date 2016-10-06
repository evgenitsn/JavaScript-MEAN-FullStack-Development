function templateFormat (input) {
  let html = '<?xml version="1.0" encoding="UTF-8"?>\n<quiz>\n'

  for (let i = 0; i < input.length; i += 2) {
    html += '  <question>\n    ' + input[i] + '\n  </question>\n'
    html += '  <answer>\n    ' + input[i + 1] + '\n  </answer>\n'
  }
  html += '</quiz>'
  console.log(html)
}

templateFormat(['Who was the forty-second president of the U.S.A.?',
    'William Jefferson Clinton']
)
