/**
 * Created by evgeni.tsn on 04-Apr-16.
 */

var numberInput = [1, 2, 1, 4, 1, 3, 4, 1, 111, 3, 2, 1, '1'];
var stringInput = ['hi', 'bye', 'hello' ];

Array.prototype.removeItem = function (el){
    var newArr = [];

    for (var i = 0; i < this.length; i++) {
        if (this[i] !== el){
            newArr.push(this[i]);
        }
    }

    return newArr;
}


console.log(numberInput.removeItem(1));
console.log(stringInput.removeItem('bye'));