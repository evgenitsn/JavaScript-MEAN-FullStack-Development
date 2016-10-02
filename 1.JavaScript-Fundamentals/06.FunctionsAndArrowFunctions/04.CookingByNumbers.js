function cookingByNumbers(input){
    let chop = function(num) {return num/2};
    let dice = function(num) {return Math.sqrt(num);}
    let spice = function(num) {return num+1};
    let bake = function(num) {return num *3};
    let fillet = function(num) {return num * 0.8};

    let num = Number(input[0]);
    let arr = input.slice(1, input.length);

    for (let n of arr){
        switch (n){
            case 'chop': console.log(num = chop(num)); break;
            case 'dice': console.log(num = dice(num)); break;
            case 'spice': console.log(num = spice(num)); break;
            case 'bake': console.log(num = bake(num)); break;
            case 'fillet': console.log(num = fillet(num)); break;
            default: break;
        }
    }
}

cookingByNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop'])