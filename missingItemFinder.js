/** from an array of 99 distinct integers from 1 to 100,
find what is missing */

var globalArray = [];
for(let i=1; i<101; i++){
    globalArray.push(i);
};

function finder(arr) {
    missingItemsArray = [];
    if(arr.every((value, index) => value === globalArray[index])){
        return "Arrays are identical !";
    } else {
        for(value of globalArray){
            if(!arr.includes(value)){
                missingItemsArray.push(value);
            }
        }
    }
    return missingItemsArray;
};

function finder_2(arr) {
    missingItemsArray = [];
    for(value of globalArray){
        if(!arr.includes(value)){
            missingItemsArray.push(value);
        }
    }
    if(missingItemsArray.length === 0){
        return "Arrays are identical !"
    } else {
        return missingItemsArray;
    }
};



/**
 * Here begin test part 
 * 
 */

var array1 = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ];

 var array2 = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ];

 var array3 = [
    1,  2,  3,   4,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99
 ];

console.log(`${finder(array1)}\t[...Identical arrays]`);
console.log(`${finder(array2)}\t\t\t[...12 is missing]`);
console.log(`${finder(array3)}\t\t[...5, 43, 68 and 100 are missing]`);

console.log(`${finder_2(array1)}\t[...Identical arrays]`);
console.log(`${finder_2(array2)}\t\t\t[...12 is missing]`);
console.log(`${finder_2(array3)}\t\t[...5, 43, 68 and 100 are missing]`);