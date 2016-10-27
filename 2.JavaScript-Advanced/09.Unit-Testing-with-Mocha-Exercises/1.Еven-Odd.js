/**
 * Created by evgeni.tsn on 27-Oct-16.
 */
function isOddOrEven(string) {
  if (typeof(string) !== 'string') {
    return undefined
  }
  if (string.length % 2 === 0) {
    return 'even'
  }

  return 'odd'
}

module.exports = {isOddOrEven}
