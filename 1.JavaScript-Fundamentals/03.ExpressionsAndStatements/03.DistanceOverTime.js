function distanceOverTime (input) {
  let firstSpeed = Number(input[0])
  let secondSpeed = Number(input[1])
  let time = Number(input[2])

  let dist1 = firstSpeed * (time / 60 / 60)
  let dist2 = secondSpeed * (time / 60 / 60)
  console.log(Math.abs(dist1 - dist2) * 1000)
}
