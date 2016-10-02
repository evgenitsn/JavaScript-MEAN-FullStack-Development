/**
 * Created by evgeni.tsn on 31-Mar-16.
 */
function decimalToHex(decimal) {
    return  (Number(decimal).toString(16)).toUpperCase()
}
var decimal = prompt("Enter number: ");
alert(decimalToHex(decimal));