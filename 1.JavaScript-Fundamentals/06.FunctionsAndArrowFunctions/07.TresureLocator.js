function tresureLocator(input) {
    let location = function (x1, y1) {
        "use strict";
             if (x1 >= 8 && x1 <= 9 && y1 >= 0 && y1 <= 1) return 'Tokelau';
        else if (x1 >= 1 && x1 <= 3 && y1 >= 1 && y1 <= 3) return 'Tuvalu';
        else if (x1 >= 5 && x1 <= 7 && y1 >= 3 && y1 <= 6) return 'Samoa';
        else if (x1 >= 0 && x1 <= 2 && y1 >= 6 && y1 <= 8) return 'Tonga';
        else if (x1 >= 4 && x1 <= 9 && y1 >= 7 && y1 <= 8) return 'Cook';
        else return 'On the bottom of the ocean';
    }

    input = input.map(Number);
    for (let i = 0; i < input.length; i+=2){
        let x = input[i];
        let y = input[i+1];

        console.log(location(x, y));
    }
}

tresureLocator([6, 4])