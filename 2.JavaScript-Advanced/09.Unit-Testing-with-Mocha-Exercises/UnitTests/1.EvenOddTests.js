/**
 * Created by evgeni.tsn on 27-Oct-16.
 */
let isOddOrEven = require('../1.Еven-Odd').isOddOrEven
let expect = require('chai').expect

describe('isOddOrEven', function() {
  it('with a number param should return undefined', function() {
    expect(isOddOrEven(13)).to.be.equal(undefined, 'Function did not return correct result!')
  })
  it('with a object param should return undefined', function() {
    expect(isOddOrEven({name: 'pesho'})).to.be.equal(undefined, 'Function did not return correct result!')
  })
  it('with an even length string should return correct result', function() {
    expect(isOddOrEven('roar')).to.be.equal('even', 'Function did not return correct result!')
  })
  it('with an odd length string should return correct result', function() {
    expect(isOddOrEven('cat')).to.be.equal('odd', 'Function did not return correct result!')
    expect(isOddOrEven('alabala')).to.be.equal('odd', 'Function did not return correct result!')
    expect(isOddOrEven('is it even')).to.be.equal('even', 'Function did not return correct result!')
  })
})
