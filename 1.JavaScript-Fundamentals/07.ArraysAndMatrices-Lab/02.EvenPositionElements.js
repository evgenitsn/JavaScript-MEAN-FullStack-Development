function evenPositionElements(input) {

    // let arr = [];
    // for (let i = 0; i < input.length; i++) {
    //     if (i % 2 == 0){
    //         arr.push(input[i]);
    //     }
    // }
    // console.log(arr.join(' '));
    console.log(input.filter((x, i) => i%2==0).join(' '));
}

evenPositionElements([1, 2, 3, ,4, 5, 6, 7, 8])