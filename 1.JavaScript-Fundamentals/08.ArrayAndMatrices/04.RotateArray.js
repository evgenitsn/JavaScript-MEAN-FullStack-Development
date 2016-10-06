function rotate (input) {
  let num = Number(input[input.length - 1])
  input = input.filter((e, ide) => ide < input.length - 1)
  for (let i = 0; i < num % input.length; i++) {
    let last = input[input.length - 1]
    for (let i = input.length - 2; i >= 0; i--) {
      input[i + 1] = input[i]
    }
    input[0] = last
  }
  console.log(input.join(' '))
}

rotate([1, 2, 3, 4, 2])
