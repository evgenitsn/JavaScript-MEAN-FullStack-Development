function oddOrEven(input){
    let num = Number(input[0]);
    if (num == Math.round(num)){
        if (num % 2 == 0){
            console.log('even')
        }
        else{
            console.log('odd');
        }
    }
    else{
        console.log('invalid');
    }
}
