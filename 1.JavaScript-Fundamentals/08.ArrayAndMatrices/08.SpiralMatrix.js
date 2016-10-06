function solution (input) {
  input = input[0].split(' ').map(Number)
  let rows = input[0]
  let cols = input[1]

  let spiralMatrix = function (matrix, rows, cols) {
    rows = Number(rows)
    cols = Number(cols)

    let counter = 1
        // start position
    let curRow = 0
    let curCol = 0
    matrix[curRow][curCol] = counter
    counter++
        // your possible moves RIGHT, DOWN, LEFT, UP * y axis is flipped
    let allMoves = [[1, 0], [0, 1], [-1, 0], [0, -1]]
    let curMove = 0
        // spiral
    while (true) {
      while (curCol >= 0 && curCol < cols && curRow >= 0 && curRow < rows) {
                // check if change of direction is needed
        if (curMove === 0 && curCol === cols - 1) { // RIGHT -> DOWN
          curMove = (curMove + 1)
        } else if (curMove === 1 && curRow === rows - 1) { // DOWN -> LEFT
          curMove = (curMove + 1)
        } else if (curMove === 2 && curCol === 0) { // LEFT -> UP
          curMove = (curMove + 1)
        } else if (curMove === 3 && curRow === 0) {    // UP -> RIGHT
          curMove = 0
        } else if (matrix[curRow + allMoves[curMove][1]][curCol + allMoves[curMove][0]] !== 0) {
          curMove = (curMove + 1) % allMoves.length
        }

        curRow += allMoves[curMove][1]
        curCol += allMoves[curMove][0]

                // set the value
        matrix[curRow][curCol] = counter
        counter++
                // if we reached the end return the matrix
        if (counter === rows * cols + 1) {
          return matrix
        }
      }
    }
  }
  let createMatrix = function (rows, cols) {
    let matrix = []
    for (let r = 0; r < rows; r++) {
      let line = []
      for (let c = 0; c < cols; c++) {
        line.push(0)
      }
      matrix.push(line)
    }
    return matrix
  }
  let printMatrix = function (matrix) {
    for (let r = 0; r < matrix.length; r++) {
      console.log(matrix[r].join(' '))
    }
  }

  let matrix = createMatrix(rows, cols)
  matrix = spiralMatrix(matrix, rows, cols)
  printMatrix(matrix)
}

solution(['5 5'])
