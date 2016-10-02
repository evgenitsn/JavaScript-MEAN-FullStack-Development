function isYearLeap([year]){
    let result = (year % 4 == 0 && year % 100 != 0) || year % 400 == 0 ? "yes": "no";
     return result;
}

console.log(isYearLeap(['2015']));

