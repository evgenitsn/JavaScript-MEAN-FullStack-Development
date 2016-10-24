function solve (nums, order) {
  let numbers = nums.map(n => Number(n))
  let type = order
  numbers.sort(function (a,b) {
    if (type === 'asc'){
      return a-b
    } else{
      return b-a
    }
  })
  return numbers
}

console.log(solve([14, 7, 17, 6, 8], 'asc'))