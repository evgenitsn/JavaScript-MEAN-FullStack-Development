/**
 * Created by evgeni.tsn on 04-Oct-16.
 */

function variableNameInSentences (input) {
  let regex = new RegExp(/_(\w+)/g)
  let text = input[0]
  let result = []
  let match = regex.exec(text)
  while (match !== null) {
    result.push(match[1])
    match = regex.exec(text)
  }
  console.log(result.join(','))
}

variableNameInSentences(['The _id and _age variables are both integers.'])
