/*eslint no-undef: */
/*eslint no-unused-vars: */
let lookupChar = require('../2.CharLookup').lookupChar
let expect = require('chai').expect

describe('lookupChar(str, index)', function () {
  describe('Nominal cases (valid input)', function () {
    it('should return correct char index with index parameter = 0', function () {
      let result = lookupChar('Anna', 0)
      expect(result).to.be.equal('A')
    })
    it('should return correct char index with index parameter > 0 && < str.length', function () {
      let result = lookupChar('Anna', 3)
      expect(result).to.be.equal('a')
    })
  })
  describe('Special cases (invalid input)', function () {
    it('should return \'undefined\' with a non-string {3} first parameter', function () {
      let result = lookupChar(3, 3)
      expect(result).to.be.equal(undefined)
    })
    it('should return \'undefined\' with a non-integer {3.3} second parameter', function () {
      let result = lookupChar('Anna', 3.3)
      expect(result).to.be.equal(undefined)
    })
    it('should return \'undefined\' with only 1 parameter', function () {
      let result = lookupChar(3)
      expect(result).to.be.equal(undefined)
      result = lookupChar('Anna')
      expect(result).to.be.equal(undefined)
    })
    it('should return \'undefined\' with empty input', function () {
      let result = lookupChar()
      expect(result).to.be.equal(undefined)
    })
  })
  describe('Special cases (incorrect index parameter)', function () {
    it('should return \'Incorrect index!\' with index parameter < 0', function () {
      let result = lookupChar('Anna', -1)
      expect(result).to.be.equal('Incorrect index')
    })
    it('should return \'Incorrect index!\' with index parameter = str.length', function () {
      let result = lookupChar('Anna', 4)
      expect(result).to.be.equal('Incorrect index')
    })
    it('should return \'Incorrect index!\' with index parameter > str.length', function () {
      let result = lookupChar('Anna', 5)
      expect(result).to.be.equal('Incorrect index')
    })
  })
})