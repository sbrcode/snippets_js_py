/** From an array of integers, find the first duplicate number in the painting */




/**
 * Here begin test part 
 * 
 */

var array1 = [1, 2, 3, 3, 5, 6, 7, 8, 9, 10];

var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var array3 = [1, 2, 3, 4, 5, 6, 6, 8, 4, 10];

var array4 = [1, 8, 3, 4, 5, 10, 5, 8, 8, 10];

console.log(`${finder(array1)}(\t*4)Answer is: 3`);
console.log(`${finder(array2)}\t\t\t\tAnswer is: no duplicate`);
console.log(`${finder(array3)}\t\t\t\tAnswer is: 6`);
console.log(`${finder(array4)}\t\t\t\tAnswer is: 5`);
