function sort(input) {
    input = input.sort(function (e1, e2) {
        return e1.toLowerCase() > e2.toLowerCase();
    }).sort(function (e1, e2) {
        return e1.length > e2.length
    }).forEach(e => console.log(e));
}

sort(['test', 'Deny', 'omen', 'Default'])
