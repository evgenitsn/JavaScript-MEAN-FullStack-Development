function aggregateTable (lines) {
  let sum = 0
  let list = []
  for (let line of lines) {
    let townData = line.split('|')
    let townName = townData[1].trim()
    let income = Number(townData[2].trim())
    list.push(townName)
    sum += income
  }
  console.log(list.join(', ') + '\n' + sum)
}

