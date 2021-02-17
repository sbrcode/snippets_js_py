/** From an array of integers, find the first duplicate number in the painting */

// find the first integer in the array which is once duplicated --> interesting anyway
function finder_2(arr){
    arrCopy = arr.slice(1);
    for(i in arr){
        for(j in arrCopy){
            if(arr[i] === arrCopy[j]){
                return arr[i]
            }
        }
        arrCopy = arrCopy.slice(1);
    }
    return "no duplicate"
}

// find the first duplicated integer in the array --> actually responds to the statement
function finder(arr){
    arrCopy = [arr[0]];
    for(value in arr){
        for(i in arrCopy){
            comparedValue = arr[arrCopy.length];
            if(arr[i] === comparedValue){
                return arr[i]
            }
        }
        arrCopy.push(comparedValue);
    }
    return "no duplicate"
}

/**
 * Here begin test part 
 * 
 */

var array1 = [1, 2, 3, 5, 3, 6, 7, 8, 9, 10];
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var array3 = [1, 2, 3, 4, 5, 6, 7, 8, 10, 10];
var array4 = [1, 8, 3, 4, 5, 10, 5, 8, 8, 4];

console.log("\t\t\t\tfinder: actually responds to the statement");
console.log(`${finder(array1)}\t\t\t\tAnswer is: 3`);
console.log(`${finder(array2)}\t\t\tAnswer is: no duplicate`);
console.log(`${finder(array3)}\t\t\t\tAnswer is: 10`);
console.log(`${finder(array4)}\t\t\t\tAnswer is: 5`);

console.log("---------------\n\t\t\t\tother finder");
console.log(`${finder_2(array1)}\t\t\t\tAnswer is: 3`);
console.log(`${finder_2(array2)}\t\t\tAnswer is: no duplicate`);
console.log(`${finder_2(array3)}\t\t\t\tAnswer is: 10`);
console.log(`${finder_2(array4)}\t\t\t\tAnswer is: 5`);