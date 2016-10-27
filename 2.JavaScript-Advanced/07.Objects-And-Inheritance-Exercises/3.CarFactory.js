function carFactory (obj) {
  let newCarObj = {}
  let smallEngine = { power: 90, volume: 1800 }
  let normalEngine = { power: 120, volume: 2400 }
  let monsterEngine = { power: 200, volume: 3500 }
  // let hatchback = { type: 'hatchback', color: undefined }
  // let coupe = { type: 'coupe', color: undefined }

  newCarObj.model = obj.model
  if (obj.power <= 90) {
    newCarObj.engine = smallEngine
  } else if (obj.power <= 120) {
    newCarObj.engine = normalEngine
  } else {
    newCarObj.engine = monsterEngine
  }

  newCarObj.carriage = { type: obj.carriage, color: obj.color }
  newCarObj.wheels = obj.wheelsize % 2 !== 0
                      ? [obj.wheelsize, obj.wheelsize, obj.wheelsize, obj.wheelsize]
                      : [obj.wheelsize - 1, obj.wheelsize - 1, obj.wheelsize - 1, obj.wheelsize - 1]

  return newCarObj
}

console.log(
  carFactory(
    {
      model: 'VW Golf II',
      power: 90,
      color: 'blue',
      carriage: 'hatchback',
      wheelsize: 14
    }
  )
)