/**
 * Created by evgeni.tsn on 04-Oct-16.
 */

function capitalizeWords (input) {
  function toTitleCase (str) {
    return str.replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    })
  }

  let text = input[0].toLowerCase()
  return toTitleCase(text)
}

console.log(capitalizeWords(['Was that Easy? tRY thIs onE for SiZe!']))
