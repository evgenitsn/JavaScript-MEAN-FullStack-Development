function drawChessboard(n){
    let size = Number(n[0]);
    let html = '<div class="chessboard">\n';
    for (let row = 1; row <= size; row++){
        html += '<div>\n';
        let color = (row % 2 == 0) ? 'black' : 'white';
        for (let col = 1; col <= size; col++){
            if (color == 'white'){
                html += '    <span class="black"></span>\n';
            }
            else{
                html += '    <span class="white"></span>\n';
            }
            color = (color == 'black') ? 'white' : 'black';
        }
        html = html.substring(0, html.length-1);
        html += '\n</div>\n';
    }
    html += '</div>'
    console.log(html);
}

drawChessboard(['2']);