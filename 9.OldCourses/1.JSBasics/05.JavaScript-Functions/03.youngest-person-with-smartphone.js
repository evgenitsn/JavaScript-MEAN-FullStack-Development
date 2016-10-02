/**
 * Created by evgeni.tsn on 03-Apr-16.
 */

function findYoungestPerson(array) {
    return array.filter(function(person) {
        return person.hasSmartphone === true;
    }).sort(function (a, b) {
        return a.age - b.age;
    });
}

var people = [
    { firstname : 'George', lastname: 'Kolev', age: 32, hasSmartphone: false },
    { firstname : 'Vasil', lastname: 'Kovachev', age: 40, hasSmartphone: true },
    { firstname : 'Bay', lastname: 'Ivan', age: 81, hasSmartphone: true },
    { firstname : 'Baba', lastname: 'Ginka', age: 40, hasSmartphone: false }];

var youngestPerson = findYoungestPerson(people)[0];

console.log("The youngest person with smartphone is " + youngestPerson.firstname + " " + youngestPerson.lastname);