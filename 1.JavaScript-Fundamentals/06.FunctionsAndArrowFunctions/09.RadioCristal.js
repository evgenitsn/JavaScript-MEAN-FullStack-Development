// function radioCristal(input) {
//     input = input.map(Number);
//     let goal = input[0];
//     let commands = input.filter((e, ide) => ide > 0);
//     let str = "";
//     let count = 0;
//
//     let cut = function (num) {
//         return num * 0.25
//     };
//     let lap = function (num) {
//         return num * 0.8
//     };
//     let grind = function (num) {
//         return num -= 20
//     };
//     let etch = function (num) {
//         return num -= 2
//     };
//     let xray = function (num) {
//         return num += 1
//     };
//     let transport = function (num) {
//         return Math.floor(num)
//     };
//
//     let process = function (goal, num) {
//         let string = '';
//         while (true) {
//             // goal is met
//             if (num > goal || num < goal) {
//                 let count = 0;
//                 // cut
//                 while (cut(num) >= goal - 1) {
//                     num = cut(num);
//                     count++;
//                 }
//                 if (count > 0) {
//                     str += `Cut x${count}\n`;
//                     count = 0;
//                     num = transport(num);
//                     str += 'Transporting and washing\n';
//                 }
//                 if (num === goal) `Finished crystal ${num} microns\n`;
//                 // lap
//                 while (lap(num) >= goal - 1) {
//                     num = lap(num);
//                     count++;
//                 }
//                 if (count > 0) {
//                     str += `Lap x${count}\n`;
//                     count = 0;
//                     num = transport(num);
//                     str += 'Transporting and washing\n';
//                 }
//                 if (num === goal)`Finished crystal ${num} microns\n`;
//                 // grind
//                 while (grind(num) >= goal - 1) {
//                     num = grind(num);
//                     count++;
//                 }
//                 if (count > 0) {
//                     str += `Grind x${count}\n`;
//                     count = 0;
//                     num = transport(num);
//                     str += 'Transporting and washing\n';
//                 }
//                 if (num === goal) `Finished crystal ${num} microns\n`;
//                 // Etch
//                 while (etch(num) >= goal-1) {
//                     num = etch(num);
//                     count++;
//                 }
//                 if (count > 0) {
//                     str += `Etch x${count}\n`;
//                     count = 0;
//                     num = transport(num);
//                     str += 'Transporting and washing\n';
//                 }
//
//                 if (num === goal) `Finished crystal ${num} microns\n`;
//
//                 // X-ray
//                 if (xray(num) === goal) {
//                     num = xray(num);
//                     count++;
//                     str += `X-ray x${count}\n`;
//                     count = 0;
//                 }
//
//                 str += `Finished crystal ${num} microns\n`;
//                 return str;
//
//             }
//             else {
//                 return string;
//                 break;
//             }
//         }
//     }
//
//     commands.forEach(function (num) {
//         str += `Processing chunk ${num} microns\n`;
//         let count = 0;
//         let temp = num;
//         str = process(goal, num)
//
//     });
//
//     console.log(str);
// }
//
//
// radioCristal([1000, 3996])

function radioCrystals(input) {

    input = input.map(Number);

    let target = input[0];

    for (var i = 1; i < input.length; i++) {

        let crystal = input[i];

        console.log(`Processing chunk ${crystal} microns`)

        let cutCount =0;

        while(crystal/4 >= target) {  crystal /= 4;  cutCount++ }

        if(cutCount != 0) {

            console.log(`Cut x${cutCount}`)

            console.log("Transporting and washing");

            crystal = Math.floor(crystal);

        }

        let lapCount =0;

        while(crystal-crystal*0.2 >= target) {  crystal -= crystal*0.2;  lapCount++ }

        if(lapCount != 0) {

            console.log(`Lap x${lapCount}`)

            console.log("Transporting and washing");

            crystal = Math.floor(crystal);

        }

        let grindCount =0;

        while(crystal-20 >= target) {  crystal -= 20;  grindCount++ }

        if(grindCount != 0) {

            console.log(`Grind x${grindCount}`)

            console.log("Transporting and washing");

            crystal = Math.floor(crystal);

        }

        let etchCount =0;

        while(crystal-2 >= target-1) {  crystal -= 2;  etchCount++ }

        if(etchCount != 0) {

            console.log(`Etch x${etchCount}`)

            console.log("Transporting and washing");

            crystal = Math.floor(crystal);

        }



        if(crystal < target) {

            crystal++

            console.log(`X-ray x1`)

        }

        console.log(`Finished crystal ${target} microns`)

    }
}

radioCrystals([1000, 3996])

