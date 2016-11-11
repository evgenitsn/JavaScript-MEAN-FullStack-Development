// function solve () {

class Melon {
  constructor (weight, melonSort) {
    if (new.target === Melon) {
      throw new Error('Melon class cannot be instantiated.')
    }
    this.weight = weight
    this.melonSort = melonSort
    this.element = ''
  }

  get elementIndex () {
    return this.weight * this.melonSort.length
  }

  toString () {
    let res = `Element: ${this.element}\n`
    res += `Sort: ${this.melonSort}\n`
    res += `Element Index: ${this.elementIndex}`
    return res
  }
}

class Watermelon extends Melon {
  constructor (weight, melonSort) {
    super(weight, melonSort)
    this.element = 'Water'
  }
}

class Airmelon extends Melon {
  constructor (weight, melonSort) {
    super(weight, melonSort)
    this.element = 'Air'
  }
}

class Firemelon extends Melon {
  constructor (weight, melonSort) {
    super(weight, melonSort)
    this.element = 'Fire'
  }
}

class Earthmelon extends Melon {
  constructor (weight, melonSort) {
    super(weight, melonSort)
    this.element = 'Earth'
  }
}

class Melolemonmelon extends Watermelon {
  constructor (weight, melonSort) {
    super(weight, melonSort)
    this._elements = ['Water', 'Fire', 'Earth', 'Air']
    this.morph()
  }

  morph () {
    let current = this._elements.shift()
    this.element = current
    this._elements.push(current)
  }
}
//   return { Melon, Watermelon, Firemelon, Earthmelon, Airmelon, Melolemonmelon }
// }
let wm = new Watermelon(20, 'nz')
let am = new Airmelon(20, 'nz')
let em = new Earthmelon(20, 'nz')
let fm = new Firemelon(20, 'nz')
console.log(wm.toString())
console.log(am.toString())
console.log(em.toString())
console.log(fm.toString())