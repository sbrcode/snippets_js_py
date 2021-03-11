/**
 * from an array, give an array containing the same elements, but in reverse order
 * 
 */

function finder(arr){
    if(typeof arr === "object"){
        return JSON.stringify(arr.reverse())
    }
    return arr.split("").reverse().join("")
}


/** Here begin test part */

var array1 = 'iamastring';
var array2 = [1, 'retro', 2, true, 5.1, 'game'];
var array3 = [[1,2,3,4,5],[6,7,8,9]];
var array4 = [{'a': 100}, {'b': 10}, {'c': 1}];

console.log(`${finder(array1)}\t\t\t\t||\tgnirtsamai`);
console.log(`${finder(array2)}\t\t\t\t||\t['game',5.1,true,2,'retro',1]`);
console.log(`${finder(array3)}\t\t\t\t||\t[[6,7,8,9],[1,2,3,4,5]]`);
console.log(`${finder(array4)}\t\t\t\t||\t[{'c': 1},{'b': 10},{'a': 100}]`);
