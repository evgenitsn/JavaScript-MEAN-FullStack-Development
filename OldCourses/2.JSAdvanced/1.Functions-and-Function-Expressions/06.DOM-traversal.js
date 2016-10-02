/**
 * Created by evgeni.tsn on 11.04.2016
 */

/*You are given an HTML file index.html. Write a function that traverses all child elements of an element by a
 given CSS selector and prints all found elements in the format:
 <Element name>: id="<id>", class="<class>"
 Print each element on a new line. Indent child elements.
 */

// RUN THIS IN BROWSER
// RUN THIS IN BROWSER
// RUN THIS IN BROWSER

var selector = ".birds";

function traverse(selector) {
    var element = document.querySelector(selector);
    var result = "";

    function traverseNode(node, spacing) {
        spacing = spacing || "\t";
        result += spacing + node.nodeName.toLocaleLowerCase() + ": ";
        var i;
        for (i = 0; i < node.attributes.length; i++) {
            result += node.attributes[i].name + "=\"" + node.attributes[i].value + "\" ";
        }
        result += "\n";

        for (i = 0; i < node.childNodes.length; i++) {
            var child = node.childNodes[i];

            if (child.nodeType === child.ELEMENT_NODE){
                traverseNode(child, spacing + "\t")
            }
        }
    }
    traverseNode(element, "");

    console.log(result);
}
traverse(selector);
