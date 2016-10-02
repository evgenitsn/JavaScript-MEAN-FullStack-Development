function convertToFootsAndInches(input){
    let num = Number(input[0]);
    let foots = Math.floor(num / 12);
    let inches = num % 12;
    let result = "" + foots + '\'-' + inches + '"';
    console.log(result);
}

convertToFootsAndInches([36])