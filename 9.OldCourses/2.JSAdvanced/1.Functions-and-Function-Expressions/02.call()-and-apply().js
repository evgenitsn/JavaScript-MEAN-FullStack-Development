/**
 * Created by evgeni.tsn on 11.04.2016
 */

/*Call the function printArgsInfo() using call() and apply() as follows:
 •	Using call() without arguments
 •	Using call() with arguments
 •	Using apply() without arguments
 •	Using apply() with arguments
 */

function printArgsInfo() {
    if (arguments.length === 0) {
        console.log("No arguments.");
    }

    for (var i = 0; i < arguments.length; i++) {

        var type = arguments[i] ? arguments[i].constructor.name.toLocaleLowerCase() : typeof arguments[i];
        console.log(arguments[i] + ' (' + type + ')');
    }
}

printArgsInfo.call(this);
printArgsInfo.call(this, 3, 2);
printArgsInfo.apply(this);
printArgsInfo.apply(this, [[2, 3, 42], ["string", "arr"]]);