function orbit(input) {

    let createMatrix = function (rows, cols, x, y) {
        let matrix = [];
        for (let r = 0; r < rows; r++) {
            let line = [];
            for (let c = 0; c < cols; c++) {
                line.push(Math.max(Math.abs(r - x), Math.abs((c - y))) + 1);
            }
            matrix.push(line);
        }
        return matrix;
    }
    let printMatrix = function (matrix) {
        for (let r = 0; r < matrix.length; r++) {
            console.log(matrix[r].join(' '));
            }
        }

    let size = input[0].split(' ').map(Number);
    let rows = size[0];
    let cols = size[1];
    let coordinates = input[1].split(' ').map(Number);
    let x = coordinates[0];
    let y = coordinates[1];

    let matrix = createMatrix(rows, cols, x, y);
    printMatrix(matrix);
}

orbit(['3 3',
    '2 2'])