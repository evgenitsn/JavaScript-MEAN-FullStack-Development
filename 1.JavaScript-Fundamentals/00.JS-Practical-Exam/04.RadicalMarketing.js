/**
 * Created by evgeni.tsn on 16-Oct-16.
 */

function solve (data) {
  let persons = new Map()
  for (let line of data) {
    let splitted = line.split('-')
    if (splitted.length === 1 ) {
      if(!persons.has(splitted[0]))
      persons.set(splitted[ 0 ], {})
      persons.get(splitted[0])['to'] = new Set()
      persons.get(splitted[0])['from'] = new Set()
    } else if (persons.has(splitted[0]) && persons.has(splitted[1])){
      persons.get(splitted[ 0 ])[ 'to' ].add(splitted[1])
      persons.get(splitted[ 1 ])[ 'from' ].add(splitted[0])
    }
  }


  function compare (a, b, people) {
    if (people.get(a)[ 'from' ].size > people.get(b)[ 'from' ].size) return -1
    if (people.get(b)[ 'from' ].size > people.get(a)[ 'from' ].size) return 1
    if (people.get(a)[ 'to' ].size > people.get(b)[ 'to' ].size) return -1
    if (people.get(b)[ 'to' ].size > people.get(a)[ 'to' ].size) return 1
    return 0
  }

  var mapAsc = [ ...persons.keys() ].sort((a, b) => compare(a, b, persons));
  console.log(mapAsc[0])

  let count = 1
  for (let sub of persons.get(mapAsc[0])['from']) {
    console.log(count + '. ' + sub)
    count++
  }
}

// solve(
//   [
//     'A',
//     'B',
//     'C',
//     'D',
//     'A-B',
//     'B-A',
//     'C-A',
//     'D-A'
//   ]
// )

solve(
  [
    'J',
    'G',
    'P',
    'R',
    'C',
    'J-G',
    'G-J',
    'P-R',
    'R-P',
    'C-J'
  ]
)