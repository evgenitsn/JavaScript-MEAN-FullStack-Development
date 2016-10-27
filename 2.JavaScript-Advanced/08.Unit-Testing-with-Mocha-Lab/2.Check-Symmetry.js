/**
 * Created by evgeni.tsn on 26-Oct-16.
 */

function isSymmetric(arr) {
  if (!Array.isArray(arr))
    return false // Non-arrays are non-symmetric
  let reversed = arr.slice(0).reverse() // Clone + reverse
  let equal =
    (JSON.stringify(arr) == JSON.stringify(reversed))
  return equal
}

//Exports function for unit testing
module.exports = {isSymmetric}
