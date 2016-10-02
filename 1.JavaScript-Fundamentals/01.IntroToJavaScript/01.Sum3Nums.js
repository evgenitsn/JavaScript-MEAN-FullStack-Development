function sumNumbers(args){
  let a = Number(args[0]);
  let b = Number(args[1]);
  let c = Number(args[2]);

  let sum = a + b + c;

  return sum;
}

console.log(sumNumbers([2,3,4]));