class Stringer {
  constructor (string, length) {
    this.string = string
    this.length = length
  }

  get innerString () {
    return this.string.toString()
  }

  get innerLength () {
    return this.length
  }

  increase (length) {
    this.length += length
  }

  decrease (length) {
    this.length -= length
    if (this.length < 3) {
      this.length = 0
    }
  }

  toString() {
    if (this.length >= this.string.length){
      return this.string
    }

    if (this.length === 0){
      return '...'
    }

    return this.string.substring(0, this.length)+ '...'
  }
}