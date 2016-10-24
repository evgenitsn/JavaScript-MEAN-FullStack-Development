// Solution using the "Module" pattern 
function getModel() {
  let model = {
    init: function(num1Sel, num2Sel, resultSel) {
      model.num1 = document.getElementById(num1Sel)
      model.num2 = document.getElementById(num2Sel)
      model.result = document.getElementById(resultSel)
    },
    add: () => model.action((a, b) => a + b),
    subtract: () => model.action((a, b) => a - b),
    action: function(operation) {
      let val1 = Number(model.num1.value);
      let val2 = Number(model.num2.value);
      model.result.value = operation(val1, val2);
    }
  }

  return model
}

let obj = getModel()
obj.init("num1","num2",'result');
let num1 = document.getElementById('num1');
let num2 = document.getElementById('num2');
let res = document.getElementById('result');
num1.value = 5
num2.value = 3
obj.add();
console.log(res.value)