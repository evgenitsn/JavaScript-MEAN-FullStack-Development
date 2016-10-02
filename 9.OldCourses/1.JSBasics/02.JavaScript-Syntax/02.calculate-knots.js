/**
 * Created by evgeni.tsn on 31-Mar-16.
 */

// 1 knot  = 1.852 km

function convertKmtoKnots(kilometers) {
    return kilometers/1.852;
}

console.log(convertKmtoKnots(20).toFixed(2));
console.log(convertKmtoKnots(112).toFixed(2));
console.log(convertKmtoKnots(400).toFixed(2));