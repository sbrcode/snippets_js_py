/** find all duplicate values of an array */

function finder(arr){
    let arrObj = [];
    for(let i of arr){
        if(typeof i === "object"){
            arrObj.push(i);
        }
    }
    if(arrObj.length === 0){
        arrF = arr.filter((elem, pos) => arr.indexOf(elem) !== pos);
        return arrF.length !== 0 ? arrF : "No duplicate"
    }
    let newArray = [];
    let lookupObject = {};
    for(let i in arrObj){
        lookupObject[arrObj[i]] = arrObj[i];
    }
    for(let j in lookupObject){
        newArray.push(lookupObject[j]);
    }
    return JSON.stringify(newArray);
}

/**
 * Here begin test part 
 * 
 */

var array1 = [1, 2, 3, 5, 6, true, 7, 8, 9, 10, 3, true];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array3 = [1, 4, 3, 'a', 4, 5, -6, 7, 8, 10, 'a', 10, -6];
var array4 = [1, 8, 3, 8, 5.1, 10, 5.1, 8, 8, 4];
var array5 = [{"a": 1}, {"b": 2}, {"b": 1}, {"a": 1}, {"b": 2}, {"b": 2}];

console.log(`${finder(array1)}\t\t\t\t|| 3,true`);
console.log(`${finder(array2)}\t\t\t\t|| No duplicate`);
console.log(`${finder(array3)}\t\t\t\t|| 4,a,10,-6`);
console.log(`${finder(array4)}\t\t\t\t|| 8,5.1,8,8`);
console.log(`${finder(array5)}\t\t\t\t|| {'a': 1},{'b': 2}`);
