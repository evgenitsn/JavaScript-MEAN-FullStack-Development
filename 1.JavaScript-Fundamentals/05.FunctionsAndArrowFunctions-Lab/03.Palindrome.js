function palindrome(input){
    let str = input[0];
    let symmetric = true;
    for (let i = 0; i < str.length/2; i++){
        if (str[i] !== str[str.length-i-1]){
            symmetric = false;
            break;
        }
    }
    console.log(symmetric);
}

palindrome(['assaa'])