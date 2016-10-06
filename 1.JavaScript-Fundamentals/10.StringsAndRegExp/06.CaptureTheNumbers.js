function captureTheNumber (input) {
  let regex = new RegExp(/\d+/g)
  let results = []
  for (let line of input) {
    let matches = line.match(regex)
    if (matches) {
      results.push(matches)
    }
  }
  let merged = [].concat.apply([], results).join(' ')
  console.log(merged)
}

captureTheNumber([ 'The300', 'What is that?', 'I think it`s the 3rd movie,', 'Lets watch it at 22:45' ])
