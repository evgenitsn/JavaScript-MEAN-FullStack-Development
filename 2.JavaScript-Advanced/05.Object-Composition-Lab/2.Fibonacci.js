function solve (input) {
  let fibonacci = (() => {
    let [fib0, fib1] = [0, 1]
    return () => {
      let [oldfib0, oldfib1]= [fib0, fib1]
      fib0 = oldfib1
      fib1 = oldfib0 + oldfib1
      return fib0
    }
  })()
  let fibNums = []
  for (let i = 0; i < input; i++) {
    fibNums.push(fibonacci())
  }
  return fibNums
}

console.log(solve(5))
