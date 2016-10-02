/**
 * Created by evgeni.tsn on 31-Mar-16.
 */


var json = [
    {
        'name' : 'Пешо',
        'score' : 91
    },
    {
        'name' : 'Лилия',
        'score' : 290
    },
    {
        'name' : 'Алекс',
        'score' : 343
    },
    {
        'name' : 'Габриела',
        'score' : 400
    },
    {
        'name' : 'Жичка',
        'score' : 70
    }
];
var ready = JSON.stringify(json);
var filtered = new Array();

var studentsInfo = JSON.parse(ready);

for (var index in studentsInfo){
    var student = studentsInfo[index];
    student.score += (student.score*10/100);
    if (student.score >= 100){
        student.hasPassed = true;
        filtered[index] = student;
    }
    else{
        student.hasPassed = false;
    }
}

console.log(filtered.sort(compare));

function compare(a,b) {
    if (a.name < b.name)
        return -1;
    else if (a.name > b.name)
        return 1;
    else
        return 0;
}