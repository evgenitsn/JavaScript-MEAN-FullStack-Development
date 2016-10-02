function triangleOfDollars(input){
    let num = Number(input[0]);
    for (let n = 1; n <= num; n++){
        let line = '$';
        line = line.repeat(n);
        console.log(line);
    }
}

triangleOfDollars(['3'])