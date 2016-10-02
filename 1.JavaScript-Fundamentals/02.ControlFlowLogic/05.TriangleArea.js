function triangleArea([a, b, c]){
    let sides = [a, b, c].map(Number);
    let p = (sides[0] + sides[1] + sides[2]) / 2;
    let area = Math.sqrt(p * (p-a) * (p-b) * (p-c));
    return area;
}
(triangleArea(['2', '3.5', '4']))