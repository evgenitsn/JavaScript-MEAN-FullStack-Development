function print(arr){
    let step = Number(arr[arr.length-1]);
    arr = arr.filter((e, ide) => ide < arr.length-1);
    for (let i = 0; i < arr.length; i+=step){
        console.log(arr[i]);
    }
}

print([5,
    20,
    31,
    4,
    20,
    2
])