/**
 * determine if a string contains only digits
 *
 */

function finder(chain){
    if(typeof chain === "string"){
        if(isNaN(Number(chain))){
            return `${chain}\tnot only digits..`
        }
        return `${chain}\tContains Only Digits !`
    }
    return `${chain}\tis not a string input.`
}

/**
 * Here begin test part 
 * 
 */

var chain1 = '122485';
var chain2 = '3.112';
var chain3 = '1 23';
var chain4 = '1A';
var chain5 = [12, 1];

console.log(`${finder(chain1)}\t\t\t\t\tAnswer: Contains Only Digits !`);
console.log(`${finder(chain2)}\t\t\t\t\tAnswer: Contains Only Digits !`);
console.log(`${finder(chain3)}\t\t\t\t\tAnswer: not only digits..`);
console.log(`${finder(chain4)}\t\t\t\t\tAnswer: not only digits..`);
console.log(`${finder(chain5)}\t\t\t\t\tAnswer: is not a string input.`);
