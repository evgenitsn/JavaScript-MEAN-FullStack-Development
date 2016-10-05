function negativePositiveNumbers (input) {
  input = input.map(Number)
  let arr = []
  for (let i = 0; i < input.length; i++) {
    if (input[i] < 0) {
      arr.unshift(input[i])
    } else {
      arr.push(input[i])
    }
  }
  arr.forEach(f => console.log(f))
}

negativePositiveNumbers([1, 2, 4, 6, -1, 5, -2])
