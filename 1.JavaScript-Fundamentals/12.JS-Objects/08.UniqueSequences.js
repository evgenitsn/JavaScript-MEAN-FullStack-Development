function uniqueSequences (data) {
  let customSort = (arrA, arrB, map) => map.get(arrA) - map.get(arrB)
  let arrays = new Map()
  for (let line of data) {
    let array = JSON.parse(line).map(Number).sort((a, b) => b - a)
    let toStore = `[${array.join(', ')}]`
    if (!arrays.has(toStore)) {
      arrays.set(toStore, array.length)
    }
  }

  console.log(
    [...arrays.keys()]
      .sort((a, b) => customSort(a, b, arrays))
      .join('\n')
  )
}

uniqueSequences([
  '[7.14, 7.180, 7.339, 80.099]',
  '[7.339, 80.0990, 7.140000, 7.18]',
  '[7.339, 7.180, 7.14, 80.099]'])
