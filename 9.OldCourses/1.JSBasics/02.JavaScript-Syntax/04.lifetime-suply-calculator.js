/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function calcSupply(age, maxAge, food, foodPerDay){
    var days = (maxAge - age)*365;
    return days*foodPerDay+"kg of "+food+" would be enough until I am "+maxAge+" years old."
}

console.log(calcSupply(38,118,"chocolate", 0.5));
console.log(calcSupply(20,87,"fruits", 2));
console.log(calcSupply(16,102,"nuts", 1.1));