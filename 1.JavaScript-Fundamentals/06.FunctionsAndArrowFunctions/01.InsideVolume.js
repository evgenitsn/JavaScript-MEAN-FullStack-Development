function insideVolume(input){
    let x1 = 10, x2 = 50;
    let y1 = 20, y2 = 80;
    let z1 = 15, z2 = 50;

    input = input.map(Number);

    let result = false;
    let checkPoint = function(x, y, z){
        if (x >= x1 && x <= x2){
            if (y >= y1 && y <= y2){
                if (z >= z1 && z <= z2){
                    return true;
                }
            }
        }
        else{
            return false;
        }
    }
    while (input.length >= 3){
        let x = input[0];
        let y = input[1];
        let z = input[2];
        result = checkPoint(x, y, z);
        console.log((result) ? "inside": "outside")
        input.splice(0, 3);
    }
}

 insideVolume([8, 20, 22, 13.1, 50, 31.5, 50, 80, 50, -5, 18, 43])