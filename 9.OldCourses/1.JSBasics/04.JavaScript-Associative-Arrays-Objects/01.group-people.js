/**
 * Created by evgeni.tsn on 02-Apr-16.
 */

function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

    this.getInfo = function() {
        return this.firstName + " " + this.lastName + "(age " + this.age + ")"
    }
}

var people = [
    new Person("Scott", "Guthrie", 38),
    new Person("Scott", "Johns", 36),
    new Person("Scott", "Hanselman", 39),
    new Person("Jesse", "Liberty", 57),
    new Person("Jon", "Skeet", 38)
];

function groupBy(criteria){
    var selectedByCriteria = [];

    for (var i = 0; i < people.length; i++) {
        if (selectedByCriteria.indexOf(people[i][criteria])===-1)
        {
            selectedByCriteria.push(people[i][criteria])
        }
    }

    for (var i = 0; i < selectedByCriteria.length; i++) {
        var result = "Group " + selectedByCriteria[i];
        var outputArr = [];

        for (var j in people) {
            if (people[j][criteria] === selectedByCriteria[i]){
                outputArr.push(people[j].getInfo());
            }
        }
        console.log(result + " : [" + outputArr.join(",") + "]")
    }
}

groupBy("firstName");
console.log("--------------------");
groupBy("age");
console.log("--------------------");
groupBy("lastName");