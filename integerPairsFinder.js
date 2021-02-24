/**
 * find all pairs of integers in an array whose sum is equal a given constant
 * 
 */

function finder(constant, arr){
    if(typeof(constant) === 'number'){
        pairs = [];
        for(i of arr){
            arrTemp = arr.slice(1, arr.length);
            for(j of arrTemp){
                if(i + j === constant){
                    if(i<=j){
                        integersPair = `${i}+${j}`;
                    }else{
                        integersPair = `${j}+${i}`;
                    }
                pairs.push(integersPair);
                }
            }
            arr = arr.slice(1, arr.length);
            if(arr.length === 1){
                break
            }
        }
        //return No Pairs at all if table of pairs is empty
        if(pairs.length === 0){
            return "No Pairs at all !"
        }
        //unduplicating
        pairs = pairs.filter((el, pos) => {
            return pairs.indexOf(el) === pos
        })
        return pairs.join(', ')
    }
    return "Please enter a number !"
}

/**
 * Here begin test part 
 * 
 */
const arr = [1, 2, 4, 100, 4, 5, 6, 7.1, 8, 9, 0.9, 0, 2];

console.log(`${finder(3, arr)}\t\t\t\t\t\tPairs are : 1+2`);
console.log(`${finder(8, arr)}\t\t\t\tPairs are : 2+6, 4+4, 0.9+7.1, 0+8`);
console.log(`${finder(103, arr)}\t\t\t\tNo Pairs at all !`);
console.log(`${finder('a', arr)}\t\t\t\tPlease enter a number !`);
