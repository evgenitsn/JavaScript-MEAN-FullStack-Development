function biggestElement (input) {
  let arr = input.join(' ').split(' ').map(Number).sort((a, b) => b - a).slice(0, 1)
  console.log(arr[0])
}

biggestElement(['1 2 345 3', '3 123 6567 124'])
