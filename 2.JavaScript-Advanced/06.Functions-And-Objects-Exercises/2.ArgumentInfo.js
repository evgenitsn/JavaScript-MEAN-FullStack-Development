function solve (...names) {
  let summary = {}
  for (let i = 0; i < names.length; i++) {
    let type = typeof names[i]
    if (!summary[type]) {
      summary[type] = 1
    } else {
      summary[type]++
    }
    console.log(typeof names[i] + ': ' + names[i])
  }
  let sortedTypes = []
  for (let curr in summary) {
    sortedTypes.push([curr, summary[curr]])
    sortedTypes.sort(
      function(a, b) { return b[1] - a[1] })
  }
  for (let summ of sortedTypes) {
    console.log(summ[0] + ' = ' + summ[1])
  }
}

solve('cat', 42, 32, function () { console.log('Hello world!'); });