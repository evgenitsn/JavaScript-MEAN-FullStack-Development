function magicMatrices (arr) {
  let readMatrix = function (arr) {
    let matrix = arr.slice()
    matrix = matrix.map(e => e.split(' ').map(Number))
    return matrix
  }
  let checkMatrix = function (arr) {
    let magic = true
    let sum = 0
    let tempSum = 0
        // check horizontally
    for (let r = 0; r < arr.length; r++) {
      for (let c = 0; c < arr[r].length; c++) {
        tempSum += arr[r][c]
      }
      if (r === 0) {
        sum = tempSum
      }
      if (sum === tempSum) {
        tempSum = 0
      } else {
        magic = false
        tempSum = 0
        break
      }
    }
        // check vertically
    if (magic) {
      for (let c = 0; c < arr.length; c++) {
        for (let r = 0; r < arr.length; r++) {
          tempSum += arr[c][r]
        }
        if (c === 0) {
          sum = tempSum
        }
        if (sum === tempSum) {
          tempSum = 0
        } else {
          magic = false
          tempSum = 0
          break
        }
      }
    }
    return magic
  }
  console.log(checkMatrix(readMatrix(arr)))
}

magicMatrices(['11 32 45',
    '21 0 1',
    '21 1 1']
)
