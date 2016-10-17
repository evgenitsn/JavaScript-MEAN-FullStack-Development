function solve (rawInput) {
  let input = rawInput.map(x => Number(x))
  let maxProduct = Number.NEGATIVE_INFINITY

  let currProduct = 1
  for (let i = 0; i < input.length; i++){
    if (input[i]>= 0 && input[i] < 10){
      let count = input[i]
      let innerCount = i;
      for (let j = 0; j < count; j++){
        innerCount++
        currProduct *= input[innerCount]
      }
      if (currProduct>maxProduct){
        maxProduct = currProduct
      }
      currProduct = 1
    }
  }
  return maxProduct
}

// console.log(
//   solve([
//     '3',
//     '4',
//     '0',
//     '4'
//   ]))

console.log(solve(
  [
    '100',
    '200',
    '2',
    '3',
    '2',
    '3',
    '2',
    '1',
    '1'
  ]
))