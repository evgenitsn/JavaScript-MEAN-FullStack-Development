function print(arr){
    let delimiter = arr[arr.length-1];
    arr = arr.filter((e, ide) => ide < arr.length-1);
    console.log(arr.join(delimiter));
}

print(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-'
])