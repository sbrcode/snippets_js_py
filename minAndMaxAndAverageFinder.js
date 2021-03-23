/**
 * determine min and max values of an number array
 * 
 */

function finder(arr){
    let arrNum = [];
    for(value of arr){
        if(typeof(value) === 'number'){
            arrNum.push(value);
        }
    }
    if(arrNum.length === 0){
        return "Not a number array !"
    }
    const ave = arrNum.reduce((acc, curVal) => acc + curVal, 0) / arrNum.length;
    return `Min: ${Math.min(...arrNum)} Max: ${Math.max(...arrNum)} Ave: ${ave}`
}

/**
 * Here begin test part 
 * 
 */

var array1 = [1, 2, 3, 100, 3, 6, 7, 8, 9, 10];
var array2 = ['a', 9, 10];
var array3 = [1, 2, 3, 4, true, 6, 7, 8, 'b', 0];
var array4 = [8, 3.1, 4, 5.1, 11, 5, 8, 8, 4];
var array5 = [8, -1.1, 4, -12, 11, 5, 8, 8, 4];
var array6 = ['a', false, [0, 1]];

console.log(`${finder(array1)}\t\t\t\t\tMin: 1, Max: 100, Ave: 14.9`);
console.log(`${finder(array2)}\t\t\t\t\tMin: 9, Max: 10, Ave: 9.5`);
console.log(`${finder(array3)}\t\t\t\t\tMin: 0, Max: 8, Ave: 3.875`);
console.log(`${finder(array4)}\t\t\t\tMin: 3.1, Max: 11, Ave: 6.2444...`);
console.log(`${finder(array5)}\t\t\t\tMin: -12, Max: 11, Ave: 3.8777...`);
console.log(`${finder(array6)}\t\t\t\tNot a number array !`);