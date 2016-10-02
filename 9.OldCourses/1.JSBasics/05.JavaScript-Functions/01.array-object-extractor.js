/**
 * Created by evgeni.tsn on 03-Apr-16.
 */

function extractObjects(array){
    var result = [];

    for (var index in array) {
        if(typeof array[index] === 'object'){
            if(!Array.isArray(array[index])){
                if(array[index] !== null){
                result.push(array[index]);
                }
            }
        }
    }

    return result;
}


var input = [
    "Pesho",
    4,
    4.21,
    null,
    undefined,
    { name : 'Valyo', age : 16 },
    { type : 'fish', model : 'zlatna ribka' },
    [1,2,3],
    "Gosho",
    { name : 'Penka', height: 1.65}
    ];


console.log(extractObjects(input));