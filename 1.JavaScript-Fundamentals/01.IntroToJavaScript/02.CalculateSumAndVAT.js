function calculateSumAndVAT (input) {
  let sum = 0
  for (let num of input) {
    sum += Number(num)
  }
  let vat = sum * 0.2
  let total = sum * 1.2

  console.log('sum = ' + sum)
  console.log('VAT = ' + vat)
  console.log('total = ' + total)
}

calculateSumAndVAT([2, 3, 5])
