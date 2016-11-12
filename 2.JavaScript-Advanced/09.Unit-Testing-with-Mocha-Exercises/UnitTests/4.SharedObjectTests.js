/*eslint no-undef: */
/*eslint no-unused-vars: */
//noinspection Eslint
// let sharedObject = require('../4.SharedObject').sharedObject
let expect = require('chai').expect
let jsdom = require('jsdom-global')()
let $ = require('jquery')

document.body.innerHTML = `<div id="wrapper">
        <input type="text" id="name">
        <input type="text" id="income">
    </div>`

let sharedObject = {
  name: null,
  income: null,
  changeName: function (name) {
    if (name.length === 0) {
      return
    }
    this.name = name
    let newName = $('#name')
    newName.val(this.name)
  },
  changeIncome: function (income) {
    if (!Number.isInteger(income) || income <= 0) {
      return
    }
    this.income = income
    let newIncome = $('#income')
    newIncome.val(this.income)
  },
  updateName: function () {
    let newName = $('#name').val()
    if (newName.length === 0) {
      return
    }
    this.name = newName
  },
  updateIncome: function () {
    let newIncome = $('#income').val()
    if (isNaN(newIncome) || !Number.isInteger(Number(newIncome)) || Number(newIncome) <= 0) {
      return
    }
    this.income = Number(newIncome)
  }
}

describe('shared object test', function () {
  it('', function() {
    sharedObject.changeName('kolev')

    expect($('#name').val()).to.be.equal('kolev')
    expect(sharedObject.name).to.be.equal('kolev')
  })

  it('', function() {
    let valueBefore = $('#name').val()
    let propBefore = sharedObject.name
    sharedObject.changeName('')


    expect(valueBefore).to.be.equal(valueBefore)
    expect(sharedObject.name).to.be.equal(propBefore)
  })

  it('', function() {
    let valueBefore = $('#name').val()
    let propBefore = sharedObject.name
    sharedObject.changeName(4)


    expect(valueBefore).to.be.equal('4')
    expect(sharedObject.name).to.be.equal(propBefore)
  })

  it('', function() {
    sharedObject.changeIncome(550)

    expect($('#income').val()).to.be.equal('550')
    expect(sharedObject.income).to.be.equal(550)
  })

  it('', function() {
    let beforeVal = $('#income').val()
    let beforeProp = sharedObject.income
    sharedObject.changeIncome(-500)

    expect(beforeVal).to.be.equal(beforeVal)
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    // let smth = sharedObject.income = 100
    sharedObject.changeIncome(0)
    expect(sharedObject.income).to.be.equal(100)
  })

  it('', function() {
    let beforeVal = $('#income').val()
    let beforeProp = sharedObject.income
    sharedObject.changeIncome(-50.3)

    expect(beforeVal).to.be.equal(beforeVal)
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    let beforeVal = $('#income').val()
    let beforeProp = sharedObject.income
    sharedObject.changeIncome(5.4)

    expect(beforeVal).to.be.equal(beforeVal)
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    let beforeVal = $('#income').val()
    let beforeProp = sharedObject.income
    sharedObject.changeIncome('500')

    expect(beforeVal).to.be.equal(beforeVal)
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    let propBefore = sharedObject.name
    $('#name').val('')

    sharedObject.updateName()
    expect(sharedObject.name).to.be.equal(propBefore)

  })

  it('', function() {
    let propBefore = sharedObject.name
    $('#name').val(undefined)

    sharedObject.updateName()
    expect(sharedObject.name).to.be.equal(propBefore)
  })

  it('', function() {
    let propBefore = sharedObject.name
    $('#name').val(null)

    sharedObject.updateName()
    expect(sharedObject.name).to.be.equal(propBefore)
  })

  it('', function() {
    let propBefore = sharedObject.name
    $('#name').val(5)

    sharedObject.updateName()
    expect(sharedObject.name).to.be.equal(propBefore)
  })

  it('', function() {

    $('#name').val('kolev')

    sharedObject.updateName()
    expect(sharedObject.name).to.be.equal('kolev')
  })

  it('', function() {
    let beforeProp = sharedObject.income
    $('#income').val(NaN)

    sharedObject.updateIncome()
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    // let beforeProp = sharedObject.income
    $('#income').val(5)

    sharedObject.updateIncome()
    expect(sharedObject.income).to.be.equal(5)
  })

  it('', function() {
    let beforeProp = sharedObject.income
    $('#income').val(-5)

    sharedObject.updateIncome()
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    let beforeProp = sharedObject.income
    $('#income').val(undefined)

    sharedObject.updateIncome()
    expect(sharedObject.income).to.be.equal(beforeProp)
  })
})

