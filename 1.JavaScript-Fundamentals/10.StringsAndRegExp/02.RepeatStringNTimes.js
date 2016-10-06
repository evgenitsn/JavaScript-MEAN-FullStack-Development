function repeatStringNTimes (input) {
  let [text, times] = [input[0], input[1]]
  return text.repeat(times)
}

console.log(repeatStringNTimes(['repeat', 5]))
