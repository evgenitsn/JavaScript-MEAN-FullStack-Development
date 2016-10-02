function addRemove (input){
    let num = 1;
    let arr = [];


    for (let i = 0; i < input.length; i++){
        if (input[i] == 'add'){
            arr.push(num);
        }
        else{
            arr = arr.filter((e, ide) => ide < arr.length-1);
        }
        num++;
    }
    if (arr.length > 0){
        arr.forEach(e => console.log(e));
    }
    else{
        console.log('Empty');
    }
}

addRemove(['add', 'add', 'remove', 'add', 'add'])