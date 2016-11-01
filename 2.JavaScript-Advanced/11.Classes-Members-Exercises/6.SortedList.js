class SortedList {
  constructor () {
    this.storage = []
    this.size = 0
  }

  add (element) {
    this.storage.push(element)
    this.reSort()
    this.size++
  }

  remove (index) {
    if (this.isValidIndex(index)) {
      this.storage.splice(index, 1)
      this.reSort()
      this.size--
    } else {
      throw new Error
    }
  }

  reSort () {
    this.storage = this.storage.sort((a, b) => a - b)
  }

  isValidIndex (index) {
    return index >= 0 && index < this.storage.length
  }

  get (index) {
    if (this.isValidIndex(index)) {
      return this.storage[index]
    } else {
      throw new Error
    }
  }
}