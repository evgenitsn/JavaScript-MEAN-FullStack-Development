function moviePrices (input) {
  let movie = input[0].toLowerCase()
  let day = input[1].toLowerCase()
  let price = 0

  switch (movie) {
    case 'the godfather':
      if (day === 'monday') price = '12'
      else if (day === 'tuesday') price = '10'
      else if (day === 'wednesday' || day === 'friday') price = '15'
      else if (day === 'thursday') price = '12.50'
      else if (day === 'saturday') price = '25'
      else if (day === 'sunday') price = '30'
      else price = 'error'
      break

    case 'schindler\'s list':
      if (day === 'saturday' || day === 'sunday') price = '15'
      else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') price = '8.50'
      else price = 'error'
      break
    case 'casablanca':
      if (day === 'saturday' || day === 'sunday') price = '10'
      else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') price = '8'
      else price = 'error'
      break
    case 'the wizard of oz':
      if (day === 'saturday' || day === 'sunday') price = '15'
      else if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') price = '10'
      else price = 'error'
      break
    default:
      price = 'error'
      break
  }
  console.log(price)
}

moviePrices(['The Godfatherggn', 'Fridaybnbn'])
