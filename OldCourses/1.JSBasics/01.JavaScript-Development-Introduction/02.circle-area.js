/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function calculateCircleArea(radius) {

    return radius*radius*Math.PI;
}

console.log(calculateCircleArea(7));
console.log(calculateCircleArea(1.5));
console.log(calculateCircleArea(20));

document.writeln("Radius = " + 7 + " Circle area: " +calculateCircleArea(7) + "<br>");
document.writeln("Radius = " + 1.5 + " Circle area: " +calculateCircleArea(1.5) + "<br>");
document.writeln("Radius = " + 20 + " Circle area: " +calculateCircleArea(20) + "<br>");