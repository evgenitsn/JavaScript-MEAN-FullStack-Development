function biggestNumber (input) {
  input = input.map(Number)
  let biggestNum = input[0]
  for (let i = 0; i < input.length; i++) {
    biggestNum = (biggestNum > input[i]) ? biggestNum : input[i]
  }
  console.log(biggestNum)
}

biggestNumber(['5', '-2', '7'])
