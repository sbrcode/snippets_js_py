/**
 * determine min and max values of an integer array
 * 
 */

function finder(arr){
    return `Min: ${Math.min(...arr)} Max: ${Math.max(...arr)}`
}

/**
 * Here begin test part 
 * 
 */

var array1 = [1, 2, 3, 100, 3, 6, 7, 8, 9, 10];
var array2 = ['a', 9, 10];
var array3 = [1, 2, 3, 4, true, 6, 7, 8, 'b', 0];
var array4 = [8, 3.1, 4, 5.1, 11, 5, 8, 8, 4];
var array5 = [8, -1, 4, -12, 11, 5, 8, 8, 4];

console.log(`${finder(array1)}\t\t\t\tMin: 1, Max: 100`);
console.log(`${finder(array2)}\t\t\t\tMin: 9, Max: 10`);
console.log(`${finder(array3)}\t\t\t\tMin: 1, Max: 8`);
console.log(`${finder(array4)}\t\t\t\tMin: 3.1, Max: 11`);
console.log(`${finder(array5)}\t\t\t\tMin: -12, Max: 11`);