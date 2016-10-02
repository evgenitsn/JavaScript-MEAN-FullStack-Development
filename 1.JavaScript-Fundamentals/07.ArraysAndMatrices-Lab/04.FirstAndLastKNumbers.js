function firstAndLastKNumbers(input){
    input = input.map(Number);
    let num = input[0];
    input = input.slice(1, input.length).sort((a,b) => a-b);
    let smallArr = input.slice(0, num);
    let bigArr = input.slice(input.length-num, input.length);
    console.log(smallArr);
    console.log(bigArr);
}

firstAndLastKNumbers([2, 1.5, 6, 3, 1032, 234, -1])