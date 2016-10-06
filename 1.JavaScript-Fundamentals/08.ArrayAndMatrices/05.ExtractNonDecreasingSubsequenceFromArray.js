function extract (input) {
  input = input.map(Number)
  let biggest
  input.filter(function (e) {
    if (biggest !== undefined) {
      if (e >= biggest) {
        biggest = e
        return true
      }
    } else {
      biggest = e
      return true
    }
  }).forEach(e => console.log(e))
}

extract([0, 0, 1, 13, 8, 4, 10, 12, 3, 2, 24])
