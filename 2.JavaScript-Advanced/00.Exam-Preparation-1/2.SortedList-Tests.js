/*eslint no-undef: */
//noinspection Eslint
let SortedList = require('./2.SortedList.js').SortedList
let expect = require('chai').expect

describe('Unit Tests for SortedList', function () {
  let list

  beforeEach(function () {
    list = new SortedList()
  })

  it('', () => {
    list.add(2)
    list.add(3)
    expect(list.get(0)).to.be.equal(2)
    expect(list.get(1)).to.be.equal(3)
  })

  it('', () => {
    list.add(2)
    list.add(3)
    expect(list.size).to.be.equal(2)
  })

  it('', () => {
    list.add(2)
    list.add(3)
    list.remove(1)
    expect(list.size).to.be.equal(1)
  })

  it('', () => {
    expect(() => {
      list.remove(-5)
    }).to.throw(Error)
  })

  it('', () => {
    list.add(-3)
    expect(list.size).to.be.equal(1)
  })

  it('', () => {
    expect(() => {list.get(800)}).to.throw(Error)
  })

  it('', () => {
    expect(() => {list.get(-5)}).to.throw(Error)
  })

  it('', () => {
    expect(SortedList.prototype.hasOwnProperty('size')).to.be.equal(true)
  })

  it('', () => {
    expect(SortedList.prototype.hasOwnProperty('get')).to.be.equal(true)
  })

  it('', () => {
    expect(SortedList.prototype.hasOwnProperty('constructor')).to.be.equal(true)
  })

  it('', () => {
    expect(SortedList.prototype.hasOwnProperty('add')).to.be.equal(true)
  })

  it('', () => {
    expect(SortedList.prototype.hasOwnProperty('remove')).to.be.equal(true)
  })

  it('', () => {
    expect(SortedList.prototype.hasOwnProperty('vrfyRange')).to.be.equal(true)
  })

  it('', () => {
    expect(list instanceof SortedList).to.be.equal(true)
  })

  it('', () => {
    expect(typeof SortedList).to.be.equal('function')
  })
})