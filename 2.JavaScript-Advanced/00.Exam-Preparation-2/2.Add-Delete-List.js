/*eslint no-undef: */
/*eslint no-unused-vars: */
let expect = require('chai').expect

let list = (function () {
  let data = []
  return {
    add: function (item) {
      data.push(item)
    },
    delete: function (index) {
      if (Number.isInteger(index) && index >= 0 && index < data.length) {
        return data.splice(index, 1)[0]
      } else {
        return undefined
      }
    },
    toString: function () {
      return data.join(', ')
    }
  }
})()

describe('Unit Tests for AddDeleteList', function () {
  let list
  beforeEach(function () {
    list = (function () {
      let data = []
      return {
        add: function (item) {
          data.push(item)
        },
        delete: function (index) {
          if (Number.isInteger(index) && index >= 0 && index < data.length) {
            return data.splice(index, 1)[0]
          } else {
            return undefined
          }
        },
        toString: function () {
          return data.join(', ')
        }
      }
    })()
  })

  it('Add one num', () => {
    list.add(5)
    expect(list.toString()).to.be.equal('5')
  })

  it('Add one string', () => {
    list.add('dsa')
    expect(list.toString()).to.be.equal('dsa')
  })

  it('Add two decimal', () => {
    list.add(1.5)
    list.add(2)
    expect(list.toString()).to.be.equal('1.5, 2')
  })

  it('Add one str and one decimal', () => {
    list.add(1.5)
    list.add('str')
    expect(list.toString()).to.be.equal('1.5, str')
  })


  it('Del one num', () => {
    list.add(5)
    list.delete(0)
    expect(list.toString()).to.be.equal('')
  })

  it('Complex add del1', () => {
    list.add(5)
    list.add('st')
    list.add(5.2)
    list.delete(2)
    list.add(22)
    expect(list.toString()).to.be.equal('5, st, 22')
  })

  it('Complex add del2', () => {
    list.add(5)
    list.add('st')
    list.add(5.2)
    list.delete(2.2)
    list.add(22)
    expect(list.toString()).to.be.equal('5, st, 5.2, 22')
  })

  it('Del one num', () => {
    list.add(5)
    list.add(22)
    list.delete(0)
    expect(list.toString()).to.be.equal('22')
  })
})