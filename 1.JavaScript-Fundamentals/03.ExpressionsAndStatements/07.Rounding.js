function round ([number, precision]) {
  let num = Number(number)
  let prcs = (Number(precision) > 15) ? 15 : Number(precision)

  console.log(Number(num.toFixed(prcs)))
}
