function letterOccuringInString(input) {
    let string = input[0];
    let character = input[1];
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        if (character === string[i]) {
            sum++;
        }
    }
    console.log(sum);
}