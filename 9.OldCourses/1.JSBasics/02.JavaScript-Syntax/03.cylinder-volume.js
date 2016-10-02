/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

function cylinderVolume(arr) {
    radius = arr[0];
    height = arr[1];

    return Math.PI*radius*radius*height;
}

console.log(cylinderVolume([2,4]).toFixed(3));
console.log(cylinderVolume([5,8]).toFixed(3));
console.log(cylinderVolume([12,3]).toFixed(3));