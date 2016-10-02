/**
 * Created by evgeni.tsn on 11.04.2016
 */

/*Create a function testContext() with no parameters. The function should print the this object. Call the function three times:
 •	From the global scope
 •	Inside another function
 •	As an object (for example, using new testContext())
 Write a comment inside your code explaining the different behaviour.
 */

function testContext() {
    console.log(this);
}
console.log("Invoke from global scope-----------------------------------------");
testContext();

function outer() {
    function inner() {
        testContext();
    }
    inner();
}
console.log("Invoke from inner function -------------------------------------------------------");
outer();

var obj = {
    info: testContext()
};

console.log("From within an object -----------------------------------------------------------------");
testContext.call(obj);

var context = new testContext();
