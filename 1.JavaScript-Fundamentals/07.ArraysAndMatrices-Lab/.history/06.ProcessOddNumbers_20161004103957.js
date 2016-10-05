function processOddNums (input) {
  let arr = input.map(Number).filter((n, idn) => idn % 2 !== 0).map(n => n * 2).reverse()
  console.log(arr.join(' '))
}

processOddNums(['10', '15', '20', '25'])
