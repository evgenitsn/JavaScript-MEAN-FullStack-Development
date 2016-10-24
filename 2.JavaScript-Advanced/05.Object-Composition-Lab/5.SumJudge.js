function domManipulation () {
  let numA, numB, result;

  function init (selectorA, selectorB, resultSelector) {
    numA = $(selectorA);
    numB = $(selectorB);
    result = $(resultSelector);
  }

  function add () {
    performAction((a, b) => a + b);
  }

  function subtract () {
    performAction((a, b) => a - b);
  }

  function performAction (action) {
    let res = action(Number(numA.val()), Number(numB.val()));
    result.val(res);
  }

  return { init, add, subtract }
}

let a = domManipulation()
a.init("#num1","#num2",'#result')
let num1 = $('#num1');
let num2 = $('#num2');
let res = $('#result');
num1.val(5);
num2.val(3);
obj.add();
console.log(res.val())