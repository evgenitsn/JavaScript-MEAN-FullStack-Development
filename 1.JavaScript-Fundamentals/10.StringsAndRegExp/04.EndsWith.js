/**
 * Created by evgeni.tsn on 04-Oct-16.
 */

function endsWith (input) {
  let [text, substring] = [input[0], input[1]]
  if (text.endsWith(substring)) {
    console.log(true)
  } else {
    console.log(false)
  }
}

endsWith(['This sentence ends with fun?', 'fun?'])
