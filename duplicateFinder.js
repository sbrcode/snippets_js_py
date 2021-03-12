/** find all duplicate values of an array */

function finder(arr, comp){
    let arrObj = [];
    for(let i of arr){
        if(typeof i === "object"){
            arrObj.push(i);
        }
    }
    if(arrObj.length === 0){
        let duplicates = []
        for(let i in arr){
            if(arr.slice(0, i-arr.length).includes(arr[i]) && ! duplicates.includes(arr[i])){
                duplicates.push(arr[i])
            }
        }
        return duplicates.length !== 0 ? JSON.stringify(duplicates) : "No duplicate"
    }
    let duplicatedObjects = []
    for(let i in arrObj){
        if(JSON.stringify(arrObj.slice(0, i-arrObj.length)).includes(JSON.stringify(arrObj[i])) &&
         ! JSON.stringify(duplicatedObjects).includes(JSON.stringify(arrObj[i]))){
            duplicatedObjects.push(arrObj[i])
        }
    }
    return duplicatedObjects.length !== 0 ? JSON.stringify(duplicatedObjects) : "No duplicate"
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

console.log(`${finder(array1)}\t\t\t\t|| [3,true]`);
console.log(`${finder(array2)}\t\t\t\t|| No duplicate`);
console.log(`${finder(array3)}\t\t\t\t|| [4,"a",10,-6]`);
console.log(`${finder(array4)}\t\t\t\t|| [8,5.1]`);
console.log(`${finder(array5, 'id')}\t\t\t\t|| [{"a": 1},{"b": 2}]`);
