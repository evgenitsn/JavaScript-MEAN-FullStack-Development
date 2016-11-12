class Person {
  constructor (name){
    this.name = name
  }
  toString() {
    return `I'm ${this.name}`
  }
}
//noinspection Eslint
module.exports = Person