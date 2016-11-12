/*eslint no-undef: */
let Checkbox = require('./models/Checkbox.js')
let Numberbox = require('./models/Numberbox.js')

let check = new Checkbox('Is Married:', '#married')
let number = new Numberbox('Age:', '#age', 1, 100)
let checkbox = $('#married')
let numberbox = $('#age')
checkbox.on('change', ()=>console.log(check.value))
numberbox.on('change', ()=>console.log(number.value))

result.Numberbox = require('./models/Numberbox')
result.Checkbox = require('./models/Checkbox')