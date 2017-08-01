function LastKNumbersSequence2(n,k){
  let result=[];
  let sum=1;
  for (let i=0; i<n;i++) {
    for(let j=0; j<k; j++) {
      sum += !(i-(j+1) < 0) ? result[i-(j+1)] : 0
    }
    result.push(sum)
    sum=0
  }
  console.log(result.join(' '))
}

LastKNumbersSequence2(8,3)