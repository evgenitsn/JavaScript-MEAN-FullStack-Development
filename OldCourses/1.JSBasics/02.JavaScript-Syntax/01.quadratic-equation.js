/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function quadratic(a,b,c) {
    var disc = b*b - 4*a*c;
    if (disc<0){
        return "No real roots"
    }
    else{
        var firstRoot = (-b - Math.sqrt(disc))/(2*a);
        var secondRoot = (-b + Math.sqrt(disc))/(2*a);

        if (firstRoot ==  secondRoot){
            return "X = "+firstRoot.toString();
        }
        else{
            return "X1 = "+firstRoot.toString()+"\n"+"X2 = "+secondRoot.toString();
        }
    }
}

console.log(quadratic(2,5,-3));
console.log(quadratic(2,-4,2));
console.log(quadratic(4,2,1));