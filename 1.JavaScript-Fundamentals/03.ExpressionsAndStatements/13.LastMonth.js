function lastMonthlastDay ([day, month, year]) {
  let date = new Date()
  date.setYear(year)
  date.setMonth(month - 1)
  date.setDate(day)

  let oneDay = 1000 * 60 * 60 * 24
  let newDate = new Date(date.setDate(1))

  newDate = new Date(newDate.getTime() - oneDay)
  console.log(newDate.getDate())
}

lastMonthlastDay(['17', '3', '2002'])

