function splitStringWithDelimiter (input) {
  let [text, separator] = [input[0], input[1]]
  return text.split(separator).filter(x => x).forEach(x => console.log(x))
}

splitStringWithDelimiter(['One-Two-Three-Four-Five', '-'])
