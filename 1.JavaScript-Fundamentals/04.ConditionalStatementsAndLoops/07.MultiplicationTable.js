function multiplicationTable(input) {
    let num = Number(input[0]);
    let html = '<table border="1">\n';

    for (let r = 0; r <= num; r++) {
        html += "<tr>"
        for (let c = 0; c <= num; c++) {
            if (r == 0 && c == 0) {
                html += '<th>x</th>';
            }
            else if (r == 0) {
                html += '<th>' + c + '</th>';
            }
            else if (c == 0) {
                html += '<th>' + r + '</th>'
            }
            else {     // multiply
                html += '<td>' + r * c + '</td>'
            }
        }
        html += '</tr>\n';
    }
    html += '\n</table>';
    console.log(html);
}

multiplicationTable([5])