function evenPositionElements (input) {
  console.log(input.filter((x, i) => i % 2 === 0).join(' '))
}

evenPositionElements([1, 2, 3, 4, 5, 6, 7, 8])
