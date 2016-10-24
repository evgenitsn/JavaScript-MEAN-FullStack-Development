let funcAdd = (() => {
  let total = 0
  return function sum (item) {
    total += item
    sum.toString = () => total
    return sum
  }
})()

console.log(funcAdd(3)(3))

