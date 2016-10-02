/**
 * Created by evgeni.tsn on 04-Apr-16.
 */

function clone(el) {
    return JSON.parse(JSON.stringify(el));
}

function compareObjects(a, b) {
    return a==b;
}

var firstA = {name: 'Pesho', age: 21};
var firstB = clone(firstA); // a deep copy

console.log(compareObjects(firstA, firstB)); //false

var secondA = {name: 'Pesho', age: 21} ;
var secondB = secondA; // not a deep copy

console.log(compareObjects(secondA, secondB)); //true

