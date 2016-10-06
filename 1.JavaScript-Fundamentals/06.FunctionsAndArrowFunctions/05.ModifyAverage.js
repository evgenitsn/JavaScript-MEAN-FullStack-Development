function modifyAverage (input) {
  let num = Number(input[0])
  let avr = function (num) { return num.toString().split('').map(Number).reduce((a, b) => a + b) / num.toString().length }
  let append9 = function (num) { return Number(num.toString() + '9') }

  while (avr(num) <= 5) {
    num = append9(num)
  }
  console.log(num)
}

modifyAverage([5835])
