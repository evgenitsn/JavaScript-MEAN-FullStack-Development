function createCar (commands) {
  let carCommands = (() => {
    let allCars = new Map()

    function create (newObj, token, parent) {
      if (!token) {
        allCars.set(newObj, {})
        return
      }

      allCars.set(newObj, Object.create(allCars.get(parent)))
    }

    function set (obj, key, value) {
      allCars.get(obj)[key] = value
    }

    function print (objName) {
      let obj = allCars.get(objName)
      let keys = Object.keys(allCars.get(objName))
                       .map(k => `${k}:${allCars.get(objName)[k]}`)

      let proto = obj
      //noinspection Eslint
      while (proto = Object.getPrototypeOf(proto)) {
        let object = Object.keys(proto).map(k => `${k}:${proto[k]}`)
        keys = keys.concat(object)
      }

      console.log(keys.join(', '))
    }

    return { create, set, print }
  })()

  for (let command of commands) {
    let tokens = command.split(' ')
    let commandName = tokens.shift()
    carCommands[commandName](...tokens)
  }
}
createCar(['create c1',
  'create c2 inherit c1',
  'set c1 color red',
  'set c2 model new',
  'print c1',
  'print c2']
)