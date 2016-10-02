function firstAndLast (input){
    input = input.map(Number);
    console.log(input[0] + input[input.length-1]);
}

firstAndLast([1, 2, 4])