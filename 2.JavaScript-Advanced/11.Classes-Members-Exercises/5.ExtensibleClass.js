let Extensible = (function () {
  let uniqueId = 0

  return class Extensible {
    constructor () {
      this.id = uniqueId++
    }

    extend (othObj) {
      for (let prop in othObj) {
        if (othObj.hasOwnProperty(prop)) {
          if (typeof othObj[prop] === 'function') {
            Extensible.prototype[prop] = othObj[prop]
          } else {
            this[prop] = othObj[prop]
          }
        }
      }
    }
  }
})()


