function isSymmetric (arr) {
  if (!Array.isArray(arr)) {
    return false
  } // Non-arrays are non-symmetric
  let reversed = arr.slice(0).reverse() // Clone + reverse
  return (JSON.stringify(arr) == JSON.stringify(reversed))
}

/*eslint no-undef: */
module.exports = { isSymmetric }
