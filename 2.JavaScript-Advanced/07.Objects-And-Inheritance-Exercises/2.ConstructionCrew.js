function solve (obj) {
  if (obj.handsShaking) {
    let neededAlcohol = 0.1 * obj.weight * obj.experience
    obj.bloodAlcoholLevel += neededAlcohol
    obj.handsShaking = false
  }
  return obj
}

console.log(
  solve(
    {
      weight: 80,
      experience: 1,
      bloodAlcoholLevel: 0,
      handsShaking: true
    }
  ))

console.log(
  solve(
    {
      weight: 120,
      experience: 20,
      bloodAlcoholLevel: 200,
      handsShaking: true
    }
  )
)

console.log(
  solve(
    {
      weight: 95,
      experience: 3,
      bloodAlcoholLevel: 0,
      handsShaking: false
    }
  )
)