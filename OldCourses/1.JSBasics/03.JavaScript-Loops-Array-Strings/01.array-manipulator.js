/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function filterOnlyNumbers(array) {
    return array.filter(isNumeric);
}

function mostFrequent(array) {
    array.sort();
    var max=0,
        result,
        freq = 0;

    for(var i=0; i < array.length; i++){

        if(array[i]===array[i+1]){
            freq++;
        }
        else {
            freq=0;
        }
        if(freq>max){
            result = array[i];
            max = freq;
        }
    }
    return result;
}

function compareNumbers(a, b) {
    return a - b;
}

var filteredArray = filterOnlyNumbers(
    ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", { bunniesCount : 10}, [10, 20, 30, 40]]);

var min = Math.min.apply(null, filteredArray);
var max = Math.max.apply(null, filteredArray);7
var mostCommon = mostFrequent(filteredArray);

console.log("Min number: " + min);
console.log("Max number: " + max);
console.log("Most frequent number: " + mostCommon);
console.log(filteredArray.sort(compareNumbers).reverse());