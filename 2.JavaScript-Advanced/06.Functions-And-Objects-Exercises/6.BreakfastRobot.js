let breakfast = (() => {
  let contaminations = {
    protein: 0,
    carbohydrate: 0,
    fat: 0,
    flavour: 0
  }
  let recipes = {
    apple: { carbohydrate: 1, flavour: 2 },
    coke: { carbohydrate: 10, flavour: 20 },
    burger: { carbohydrate: 5, fat: 7, flavour: 3 },
    omelet: { protein: 5, fat: 1, flavour: 1 },
    cheverme: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
  }

  function restock (contaminate, quantity) {
    contaminations[contaminate] += Number(quantity)
    return 'Success'
  }

  function report () {
    return [...Object.keys(contaminations)]
      .map(elem => `${elem}=${contaminations[elem]}`)
      .join(' ')
  }

  function prepare (recipe, quantity) {
    for (let element of Object.keys(recipes[recipe])) {
      let total = recipes[recipe][element] * Number(quantity)
      if (contaminations[element] < total) {
        return `Error: not enough ${element} in stock`
      }
    }

    for (let element of Object.keys(recipes[recipe])) {
      contaminations[element] -= recipes[recipe][element] * Number(quantity)
    }
    return 'Success'
  }

  return (input) => {
    let splitted = input.split(' ')
    let name = splitted.shift()
    let params = splitted
    switch (name) {
    case 'prepare':
      return prepare(...params)
    case 'restock':
      return restock(...params)
    default:
      return report()
    }
  }

})()

console.log(breakfast('report'))