function personalBmi (personName, age, weight, height) {
  function calculateBmi (w, h) {
    return Number(w) / (Number(h) / 100 * Number(h) / 100)
  }

  let result = {}
  result.name = personName
  result.personalInfo = {
    age: age,
    weight: Math.round(Number(weight)),
    height: Math.round(Number(height))
  }

  result.BMI = Math.round(calculateBmi(weight, height))

  function getStatus () {
    switch (true) {
    case result.BMI < 18.5:
      return 'underweight'
    case result.BMI < 25:
      return 'normal'
    case result.BMI < 30:
      return 'overweight'
    default:
      return 'obese'
    }
  }

  let status = getStatus()

  result.status = status
  if (status === 'obese') {
    result.recommendation = 'admission required'
  }

  return result
}

console.log(personalBmi('NEZNAMBRAT', 4, 62, 150))