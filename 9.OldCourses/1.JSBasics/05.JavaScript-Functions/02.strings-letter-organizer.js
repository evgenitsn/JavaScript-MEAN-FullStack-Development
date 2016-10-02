/**
 * Created by evgeni.tsn on 03-Apr-16.
 */

function sortLetters(word, boolean) {
    var array = word.split("");
    if (boolean){
        var sorted = array.sort(function (a, b) {
            return a.toLowerCase().localeCompare(b.toLowerCase());
        })
    }else{
        sorted = array.sort(function (a, b) {
            return b.toLowerCase().localeCompare(a.toLowerCase());
        });
    }
    return sorted.join("");
}

console.log(sortLetters("HelloWorld", true));
console.log(sortLetters("HelloWorld", false));
