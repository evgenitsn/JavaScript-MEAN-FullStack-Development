function agragateElements(input){
    input = input.map(Number);
    // summing numbers function
    let sumNumbers = function(input){
        let sum = 0;
        for (let num of input){
            sum += num;
        }
        return sum
    }
    // sum inversed numbers function - 1/num
    let sumInversedNums = function(input){
        let sum = 0;
        for (let num of input){
            sum += 1/num;
        }
        return sum;
    }
    // concat function
    let concatNums = function (input) {
        let result = "";
        for (let num of input){
            result += num;
        }
        return result;
    }

    // results
    let sum = sumNumbers(input);
    let sumInversed = sumInversedNums(input);
    let concat = concatNums(input);

    console.log(sum);
    console.log(sumInversed);
    console.log(concat);

}

console.log(agragateElements([2, 3, 5]));