let vectorMath = (() => {
  function add (vectorA, vectorB) {
    return [vectorA[0] + vectorB[0], vectorA[1] + vectorB[1]]
  }

  function multiply (vectorA, scalar) {
    return [vectorA[0] * scalar, vectorA[1] * scalar]
  }

  function length (vectorA) {
    return Math.sqrt(Math.pow(vectorA[0], 2) + Math.pow(vectorA[1], 2))
  }

  function dot (vectorA, vectorB) {
    return vectorA[0] * vectorB[0] + vectorA[1] * vectorB[1]
  }

  function cross (vectorA, vectorB) {
    return vectorA[0] * vectorB[1] - vectorA[1] * vectorB[0]
  }

  return { add, multiply, length, dot, cross}
})()

console.log(vectorMath.add([1,1], [1,0]))

console.log(vectorMath.multiply([3.5, -2], 2))
console.log(vectorMath.length([3, -4]))
console.log(vectorMath.dot([1, 0], [0, -1]))
console.log(vectorMath.cross([3, 7], [1, 0]))
