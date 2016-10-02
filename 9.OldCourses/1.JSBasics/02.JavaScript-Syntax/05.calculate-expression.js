/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function calcExpression() {
    var expression = document.getElementById('input').value;
    var result = eval(expression);
    document.getElementById('output').innerHTML = result.toString();
    return false;
}