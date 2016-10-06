function functionalCalculator ([num1, num2, operator]) {
  [num1, num2].map(Number)
  let calc = function (num1, num2, operator) { return operator(num1, num2) }

  let add = function (num1, num2) { return num1 + num2 }
  let subtract = function (num1, num2) { return num1 - num2 }
  let multiply = function (num1, num2) { return num1 * num2 }
  let divide = function (num1, num2) { return num1 / num2 }

  let result = 0
  switch (operator) {
    case '+': result = calc(num1, num2, add); break
    case '-': result = calc(num1, num2, subtract); break
    case '*': result = calc(num1, num2, multiply); break
    case '/': result = calc(num1, num2, divide); break
    default: break
  }
  console.log(result)
}

functionalCalculator([2, 4, '+'])

