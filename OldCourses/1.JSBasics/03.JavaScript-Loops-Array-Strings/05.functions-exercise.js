/**
 * Created by evgeni.tsn on 02-Apr-16.
 */

function newString(symbol, count) {
    var output = "";
    for (var j = 0; j < count; j++) {
        output += symbol;
    }
    return output;
}

function solve(input) {
    var n = Number(input[0]),
        stars = n,
        dots = 0,
        i, j, k,
        output = "";
    for (i = 0; i < n / 2; i++) {
        output += newString(".", dots);
        output += newString("*", stars);
        output += newString(".", dots);
        output += "\n";
        stars -= 2;
        dots++;
    }
    
    dots--;
    stars += 2;
    for (i = 0; i < n / 2 - 1; i++) {
        dots--;
        stars += 2;
        output += newString(".", dots);
        output += newString("*", stars);
        output += newString(".", dots);
        output += "\n"
    }
    return output;
}
console.log(solve(['7']));