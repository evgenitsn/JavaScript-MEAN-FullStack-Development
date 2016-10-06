function wordOccurr (input) {
  let [text, word] = [input[0], input[1]].map(x => x.toLowerCase())
  text = text + ' '
  var count = (text.match(new RegExp(word + '[,.?!; ]', 'g')) || []).length
  console.log(count)
}

wordOccurr([ 'The waterfall was so high, that the, child couldn’t see its peak.', 'The' ])
