let map = new Map()
map.set(3, 'Pesho')
map.set(4, 'Gosho')
map.set(1, 'Sashko')

function mapSort (map, sortMethod) {
  let mapAsc
  if (sortMethod) {
    mapAsc = new Map([...map.entries()].sort().reverse())
  } else {
    mapAsc = new Map([...map.entries()].sort())
  }
  return mapAsc
}

//noinspection Eslint
module.exports = mapSort