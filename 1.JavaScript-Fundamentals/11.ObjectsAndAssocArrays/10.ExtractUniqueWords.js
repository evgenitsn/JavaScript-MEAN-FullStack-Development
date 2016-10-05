function extractWords (inputSentences) {
  let wordPattern = /\b[a-zA-Z0-9_]+\b/g
  let words = new Set()
  for (let sentence of inputSentences) {
    let matches = sentence.match(wordPattern)
    matches.forEach(x => words.add(x.toLowerCase()))
  }
  console.log([...words.values()].join(', '))
}

extractWords(['JS and Node.js', 'JS again and again', 'Oh, JS?'])
