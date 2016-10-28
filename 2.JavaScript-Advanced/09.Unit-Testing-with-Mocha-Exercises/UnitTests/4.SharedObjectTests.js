/**
 * Created by evgeni.tsn on 27-Oct-16.
 */
let sharedObject = require('../4.SharedObject').sharedObject
let expect = require('chai').expect

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


    expect($('#name').val()).to.be.equal(valueBefore)
    expect(sharedObject.name).to.be.equal(propBefore)
  })

  it('', function() {
    let valueBefore = $('#name').val()
    let propBefore = sharedObject.name
    sharedObject.changeName(4)


    expect($('#name').val()).to.be.equal(valueBefore)
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

    expect($('#income').val()).to.be.equal(beforeVal)
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    let smth = sharedObject.income = 100
    sharedObject.changeIncome(0)
    expect(sharedObject.income).to.be.equal(100)
  })

  it('', function() {
    let beforeVal = $('#income').val()
    let beforeProp = sharedObject.income
    sharedObject.changeIncome(-50.3)

    expect($('#income').val()).to.be.equal(beforeVal)
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    let beforeVal = $('#income').val()
    let beforeProp = sharedObject.income
    sharedObject.changeIncome(5.4)

    expect($('#income').val()).to.be.equal(beforeVal)
    expect(sharedObject.income).to.be.equal(beforeProp)
  })

  it('', function() {
    let beforeVal = $('#income').val()
    let beforeProp = sharedObject.income
    sharedObject.changeIncome('500')

    expect($('#income').val()).to.be.equal(beforeVal)
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
    let beforeProp = sharedObject.income
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

