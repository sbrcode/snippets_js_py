/**
 * find all pairs of integers in an array whose sum is equal a given constant
 * 
 */

const arr = [1, 2, 4, 100, 4, 5, 6, 7.1, 8, 9, 0.9, 0];

function finder(arr){

}

/**
 * Here begin test part 
 * 
 */

var const1 = 3;
var const2 = 8;
var const3 = 103;

console.log(`${finder(const1)}\t\t\t\t\tPairs are : 1 & 2`);
console.log(`${finder(const2)}\t\t\t\t\tPairs are : 2 & 6, 4 & 4, 8 & 0`);
console.log(`${finder(const3)}\t\t\t\t\tNo Pairs at all !`);
