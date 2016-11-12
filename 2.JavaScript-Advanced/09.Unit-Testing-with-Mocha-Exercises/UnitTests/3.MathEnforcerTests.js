/*eslint no-undef: */
//noinspection Eslint
let mathEnforcer = require('../3.MathEnforcer').mathEnforcer
let expect = require('chai').expect

describe('mathEnforcer', function () {
  describe('addFive', function () {
    it('with a non-number parameter, should return undefined', function () {
      expect(mathEnforcer.addFive('dasda')).to.equal(undefined)
    })
    it('with a 5 parameter, should return 10', function () {
      expect(mathEnforcer.addFive(5)).to.equal(10)
    })
    it('with a 5 parameter, should return 10', function () {
      expect(mathEnforcer.addFive(5.2)).to.equal(10.2)
    })
    it('with a 5 parameter, should return 10', function () {
      expect(mathEnforcer.addFive(-5.2)).to.equal(5+(-5.2))
    })
    it('with a 5 parameter, should return 10', function () {
      expect(mathEnforcer.addFive(NaN)).to.be.NaN
    })
    it('with none parameter, should return undefined', function () {
      expect(mathEnforcer.addFive('')).to.equal(undefined)
    })
    it('with array parameter, should return undefined', function () {
      expect(mathEnforcer.addFive([3,4])).to.equal(undefined)
    })
    it('with array parameter, should return undefined', function () {
      expect(mathEnforcer.addFive({name: 'ghoso'})).to.equal(undefined)
    })
  })
  describe('substractTen', function () {
    it('with a non-number parameter, should return undefined', function () {
      expect(mathEnforcer.subtractTen('dasda')).to.equal(undefined)
    })
    it('with a 20 parameter, should return 10', function () {
      expect(mathEnforcer.subtractTen(20)).to.equal(10)
    })
    it('with a 20 parameter, should return 10', function () {
      expect(mathEnforcer.subtractTen(21.2)).to.equal(11.2)
    })
    it('with a 5 parameter, should return 10', function () {
      expect(mathEnforcer.subtractTen(-5.2)).to.equal(-5.2-10)
    })
    it('with a 5 parameter, should return -5', function () {
      expect(mathEnforcer.subtractTen(5)).to.equal(-5)
    })
    it('with a 5 parameter, should return -5', function () {
      expect(mathEnforcer.subtractTen('')).to.equal(undefined)
    })
    it('with a 5 parameter, should return -5', function () {
      expect(mathEnforcer.subtractTen({maikati: 'bashtamu'})).to.equal(undefined)
    })
  })
  describe('sum', function () {
    it('with a non-number parameters, should return undefined', function () {
      expect(mathEnforcer.sum('dasda', 'ddas')).to.equal(undefined)
    })
    it('with a non-number parameters, should return undefined', function () {
      expect(mathEnforcer.sum(undefined, 'ddas')).to.equal(undefined)
    })
    it('with one non-number parameters, should return undefined', function () {
      expect(mathEnforcer.sum('dasda', 10)).to.equal(undefined)
    })
    it('with other non-number parameters, should return undefined', function () {
      expect(mathEnforcer.sum(10, 'ddas')).to.equal(undefined)
    })
    it('with right 10 and 11, should return 21', function () {
      expect(mathEnforcer.sum(10, 11)).to.equal(21)
    })
    it('with right -10 and 11, should return 21', function () {
      expect(mathEnforcer.sum(-10, 11)).to.equal(1)
    })
    it('with right -10 and 11, should return 21', function () {
      expect(mathEnforcer.sum(2.2, 3.3)).to.equal(5.5)
    })
  })
})
