/**
 * Created by evgeni.tsn on 20-Oct-16.
 */

function extractText() {
  let itemNodes =
    document.querySelectorAll("ul#items li");
  let textarea =
    document.querySelector("#result");
  for (let node of itemNodes) {
    textarea.value += node.textContent + "\n";
  }
}
