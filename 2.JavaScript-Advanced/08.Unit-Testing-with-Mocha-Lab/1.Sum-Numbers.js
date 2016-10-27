function sum (arr) {
  let sum = 0
  for (let num of arr)
    sum += Number(num)
  return sum
}

//Exports function for unit testing
module.exports = {sum}