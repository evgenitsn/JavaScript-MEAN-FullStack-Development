function smallestTwo (input) {
  let arr = input.map(Number).sort((a, b) => a - b).slice(0, 2)
  console.log(arr.join(' '))
}

smallestTwo(['30', '15', '50', '5'])
