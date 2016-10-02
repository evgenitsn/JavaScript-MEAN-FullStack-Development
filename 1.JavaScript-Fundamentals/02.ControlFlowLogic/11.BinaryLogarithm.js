function binaryLogartihm (input){
    let nums = input.map(Number);
    for(let num of nums){
        console.log(Math.log2(num));
    }
}

binaryLogartihm(['2', '1024'])