/** find all duplicate values of an array */

function finder(arr){

}

/**
 * Here begin test part 
 * 
 */

var array1 = [1, 2, 3, 5, 6, 7, 8, 9, 10, 3];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array3 = [1, 4, 3, 4, 5, 6, 7, 8, 10, 10, 6];
var array4 = [1, 8, 3, 8, 5, 10, 5, 8, 8, 4];

console.log(`${finder(array1)}\t\t\t\tAnswer is: 3`);
console.log(`${finder(array2)}\t\t\tAnswer is: no duplicate`);
console.log(`${finder(array3)}\t\t\t\tAnswer is: 4, 6, 10`);
console.log(`${finder(array4)}\t\t\t\tAnswer is: 5, 8`);
