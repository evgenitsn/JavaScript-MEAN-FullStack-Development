function diagonalSums (input) {
  let matrix = []
  for (let r = 0; r < input.length; r++) {
    let line = input[r].split(' ').map(Number)
    matrix.push(line)
  }

  let leftDown = matrix[0][0]
  let leftUp = matrix[matrix.length - 1][0]

  for (let r = 0; r < matrix.length - 1; r++) {
    leftDown += matrix[r + 1][r + 1]
    leftUp += matrix[matrix.length - 1 - 1 - r][r + 1]
  }

  console.log(leftDown + ' ' + leftUp)
}

diagonalSums(['3 5 17',
  '-1 7 14',
  '1 -8 89'])
