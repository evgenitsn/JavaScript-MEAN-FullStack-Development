/**
 * Created by evgeni.tsn on 16-Oct-16.
 */

function solve (input) {
  let decoder = []
  let enc = []
  let dec = []
  let size = Number(input[ 0 ])
  //MAP THE DERCODER
  for (let i = 1; i < input.length && i <= size; i++) {
    let decoderLInes = input[ i ].split(/\s+/).map(x => Number(x))
    decoder.push(decoderLInes)
    var lineLenght = decoderLInes.length
  }

  for (let i = size + 1; i < input.length; i++) {
    let nums = input[ i ].split(/\s+/).map(x => Number(x))
    enc.push(nums)
    dec.push(nums)
  }
  for (let rows = 0; rows < enc.length; rows += size) {
    for (let columns = 0; columns < enc[ rows ].length; columns += lineLenght) {
      for (let i = rows, x = 0;  i < rows + size && i < enc.length; i++, x++) {
        for (let j = columns, y = 0; j < columns + lineLenght && j < enc[ rows ].length; j++, y++) {
          let getLetter = (enc[ i ][ j ] + decoder[ x ][ y ]) % 27
          if (getLetter === 0) {
            getLetter = ' '
          } else {
            getLetter = String.fromCharCode(getLetter + 64)
          }
            dec[ rows + x ][ columns + y ] = getLetter
        }
      }
    }
  }

  let resuly = ''
  for (line of dec) {
    resuly += line.join('')
  }


  console.log(resuly)
}

solve([ '2',
  '31 32',
  '74 37',
  '19 0 23 25',
  '22 3 12 17',
  '5 9 23 11',
  '12 18 10 22' ]
)