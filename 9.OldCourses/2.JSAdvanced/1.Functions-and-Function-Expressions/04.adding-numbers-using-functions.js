/**
 * Created by evgeni.tsn on 11.04.2016
 */

/*Write a function add() which adds numbers in a functional manner. It should work as follows:
 •	add(1) // returns 1
 •	add(2)(3) // returns 5
 •	add(1)(1)(1)(1)(1) // returns 5
 •	add(1)(0)(-1)(-1) // returns -1
 We should also be able to store the result and reuse it:
 var addTwo = add(2);
 console.log(addTwo); // 2
 console.log(addTwo(3)); // 5
 */

var add = (function () {
    var sum = 0;

    function increment(number) {
        sum += number;
        return add;
    }

    increment.toString = function () {
        return sum;
    };

    return increment;
})();

var addTwo = add(2);
console.log(addTwo(3)(5).toString());



