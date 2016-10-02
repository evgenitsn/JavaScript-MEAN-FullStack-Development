/**
 * Created by evgeni.tsn on 11.04.2016
 */

/*
 Create a function printArgsInfo() with no parameters.
 For each argument passed to it, the function should return its type and its value.
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
console.log("First example");
printArgsInfo(2, 3, 2.5, -110.5564, false);
console.log("Second example");
printArgsInfo(null, undefined, "", 0, [], {});
console.log("Third example");
printArgsInfo([1, 2], ["string", "array"], ["single value"]);
console.log("Forth example");
printArgsInfo("some string", [1, 2], ["string", "array"], ["mixed", 2, false, "array"], {name: "Peter", age: 20});
console.log("Fifth example");
printArgsInfo([[1, [2, [3, [4, 5]]]], ["string", "array"]]);
