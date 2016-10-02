function pointInsideRect(input){
    input = input.map(Number);
    let x = input[0];
    let y = input[1];
    let minX = input[2];
    let maxX = input[3];
    let minY = input[4];
    let maxY = input[5];

    if ((x >= minX && x <= maxX) && (y >= minY && y <= maxY)){
        console.log('inside');
    }
    else{
        console.log('outside');
    }
}

pointInsideRect(['12.5','-1', '2','12','-3','3'])