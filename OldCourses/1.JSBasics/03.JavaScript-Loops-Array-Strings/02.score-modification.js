/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function isValidScore(n) {
    if(n>=0 && n<=400){
        return true;
    }
    return false;
}

function filteredValidScores(array) {
    return array.filter(isValidScore);
}

function compareNumbers(a, b) {
    return a - b;
}

var filteredArray = filteredValidScores([200, 120, 23, 67, 350, 420, 170, 212, 401, 615, -1]);
var outputArr = new Array();
for(var element in filteredArray.sort(compareNumbers)){
    var each = filteredArray[element];
    each = each-each*20/100;
    outputArr[element] = each;
}
console.log(outputArr);