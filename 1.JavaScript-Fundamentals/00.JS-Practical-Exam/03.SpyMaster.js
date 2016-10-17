/**
 * Created by evgeni.tsn on 16-Oct-16.
 */

//specialKey\s+([A-Z!%$#]+){8}[,.! ]

function solve (input) {
  let specialKey = input[ 0 ].toLowerCase()
  for (let i = 1; i < input.length; i++) {
    let text = input[ i ]
    let formattedText = text

    let res = replaceAll(formattedText, specialKey, specialKey.toLowerCase())

    function escapeRegExp (str) {
      return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
    }

    function replaceAll (str, find, replace) {
      return str.replace(new RegExp(escapeRegExp(find), 'gi'), replace);
    }

    let regex = new RegExp('(?:^|[\\s+])(?:' + specialKey.toLowerCase() + '\\s+)([A-Z%!\\#$]{8,})(?:$|[\\s\\,.])','g')
    let regex = new RegExp(specialKey + `\\s+(([A-Z!%$#]+){8,})[,.! ]`, 'g')

    let match = regex.exec(res)
    while (match !== null) {
      let initMatch = match[ 1 ]
      match[ 1 ] = match[ 1 ].toLowerCase()
      for (let i = 0; i < match[ 1 ].length; i++) {
        if (match[ 1 ].indexOf('!') !== -1) {
          match[ 1 ] = match[ 1 ].replace('!', 1)
        }
        if (match[ 1 ].indexOf('%') !== -1) {
          match[ 1 ] = match[ 1 ].replace('%', 2)
        }
        if (match[ 1 ].indexOf('#') !== -1) {
          match[ 1 ] = match[ 1 ].replace('#', 3)
        }
        if (match[ 1 ].indexOf('$') !== -1) {
          match[ 1 ] = match[ 1 ].replace('$', 4)
        }
      }
      text = text.replace(initMatch, match[ 1 ])
      match = regex.exec(res)
    }
    console.log(text)
  }
}


  solve([
    'specialKey',
    'In this text the specialKey HELLOWORLD! is correct, but',
    'the following specialKey $HelloWorl#d and spEcIaLKEy HOLLOWORLD1 are not, while',
    'SpeCIaLkeY   SOM%%ETH$IN and SPECIALKEY ##$$##$$ are!'
  ])

// console.log(
//   solve([
//     'specialKey',
//     'In this text the specialkey HELLOWORLD! is correct, but the following specialkey $HelloWorl#d and specialkey HOLLOWORLD1 are not, while specialkey   SOM%%ETH$IN and specialkey ##$$##$$ are!'
//   ])
// )