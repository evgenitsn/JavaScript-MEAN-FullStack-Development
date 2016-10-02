/**
 * Created by evgeni.tsn on 11.04.2016
 */

/*Function composition of two functions f() and g() is defined (mathematically) as g(f(x)), where x is the input to the function f().
 For example, if f(x) = sin(x) and g(x) = x^2, their composition will be sin(x^2).
 Write a function compose(f, g) which returns the function composition of f() and g(). compose(f, g) (where f and g are functions) should return another function, and compose(f, g)(x) should return the value of the composition applied to the argument x. For simplicity, assume that f() can take only one argument.
 */

function add(x, y) {
    return x + y;
}
function addOne(x) {
    return x + 1;
}
function square(x) {
    return x * x;
}

function compose(first, second) {
    return function () {
        var innerResult = second.apply(null, arguments);
        return first(innerResult);
    };
}

console.log(compose(addOne, square)(5));
console.log(compose(addOne, add)(5, 6));
console.log(compose(Math.cos, addOne)(-1));
console.log(compose(addOne, Math.cos)(-1));

var compositeFunction = compose(Math.sqrt, Math.cos);
console.log(compositeFunction(0.5));
console.log(compositeFunction(1));
console.log(compositeFunction(-1));

