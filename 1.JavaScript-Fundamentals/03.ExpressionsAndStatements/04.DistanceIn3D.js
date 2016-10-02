function distanceBetween3dPoints(input){
    let pointA = {x:Number(input[0]), y:Number(input[1]), z:Number(input[2])};
    let pointB = {x:Number(input[3]), y:Number(input[4]), z:Number(input[5])};

    let distance = Math.sqrt(Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2) + Math.pow(pointB.z - pointA.z, 2));
    console.log(distance);
}
en3dPoints(['1', '1','0','5','4','0'])