function filterByAge([minAge, name1, age1, name2, age2]){

    let firstPerson = ({name:name1, age:Number(age1)});
    let secondPerson = ({name:name2, age:Number(age2)});


        if (minAge <= firstPerson.age){
            console.log(firstPerson);
        }
        if (minAge <= secondPerson.age){
            console.log(secondPerson);
        }
}