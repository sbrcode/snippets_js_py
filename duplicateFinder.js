/** find all duplicate values of an array */

function finder(arr){
    arrF = arr.filter((elem, pos) => arr.indexOf(elem) !== pos);
    return arrF.length !== 0 ? arrF : "No duplicate"
}

function removeDuplicity(arr){
    return arr.filter((item, index, arr) => {
        const c = arr.map(item => item.name);
        return index === c.indexOf(item.name)
    })
}

/**
 * Here begin test part 
 * 
 */

var array1 = [1, 2, 3, 5, 6, true, 7, 8, 9, 10, 3, true];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array3 = [1, 4, 3, 'a', 4, 5, -6, 7, 8, 10, 'a', 10, -6];
var array4 = [1, 8, 3, 8, 5.1, 10, 5.1, 8, 8, 4];
var array5 = [{"a": 1}, {"b": 2}, {"b": 1}, {"a": 1}];

console.log(`${finder(array1)}\t\t\t\t|| 3,true`);
console.log(`${finder(array2)}\t\t\t\t|| No duplicate`);
console.log(`${finder(array3)}\t\t\t\t|| 4,a,10,-6`);
console.log(`${finder(array4)}\t\t\t\t|| 8,5.1,8,8`);
console.log(`${finder(array5)}\t\t\t\t|| {'a': 1}`);
