function squareOfStars(input){
    let num = Number(input[0]);
    for (let i = 1; i <= num; i++){
        console.log('* '.repeat(num));
    }
}

squareOfStars([2])