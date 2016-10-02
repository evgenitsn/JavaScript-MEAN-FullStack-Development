function diagonalAttack(input){
    let readMatrix = function(input){
        let matrix = [];
        for (let r = 0; r < input.length; r++){
                let line = input[r].split(' ').map(Number);
                matrix.push(line);
        }
        return matrix;
    }
    let checkDiagonals = function(matrix){

        let leftDown = matrix[0][0];
        let leftUp = matrix[matrix.length-1][0];

        for (let r = 0; r < matrix.length-1; r++){
            leftDown += matrix[r+1][r+1];
            leftUp += matrix[matrix.length-1-1-r][r+1];
        }
        if (leftDown === leftUp){
            // sum of diagonal
            return leftDown;
        }
        else return false;
    }
    let printMatrix = function (matrix) {
        for (let r = 0; r < matrix.length; r++) {
            console.log(matrix[r].join(' '));
        }
    }
    let updateNonDiagonals = function (matrix, diagonalSum) {
        let rMiddle = Math.floor(matrix.length / 2);
        let cMiddle = Math.floor(matrix[0].length / 2);
        for (let r = 0; r < matrix.length; r++){
            for (let c = 0; c < matrix[r].length; c++){
                // leftDown diagonal

                // leftRight diagonal
                if (r + c != rMiddle + cMiddle && r !== c){
                    matrix[r][c] = diagonalSum;
                }
            }
        }
        return matrix;
    }

    let matrix = readMatrix(input);
    let diagonalSum = checkDiagonals(matrix);

    if (diagonalSum === false){
        printMatrix(matrix);
    }
    else{
        matrix = updateNonDiagonals(matrix, diagonalSum);
        printMatrix(matrix);
    }
}

diagonalAttack(['5 3 12 3 1',
    '11 4 23 2 5',
    '101 12 3 21 10',
    '1 4 5 2 2',
    '5 22 33 11 1']
)