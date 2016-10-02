function uppercase(input) {
    let str = input[0];
    let regex = /\W+/g;
    let array = str.split(regex);
    array = array.map(e => e.toUpperCase());
    let temp = [];
    for (let elem of array){
        elem && temp.push(elem);
    }
    array = temp;

    console.log(array.join(', '))
}

uppercase(['.Hi, how are i.mi.you.'])

