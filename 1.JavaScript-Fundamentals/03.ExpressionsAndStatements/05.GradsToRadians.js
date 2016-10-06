function gradToDegree (input) {
  let grads = Number(input[0])
  grads = grads % 400
  grads += 400
  grads = grads % 400
  let degrees = grads * 0.9
  console.log(degrees)
}

gradToDegree([-900])
