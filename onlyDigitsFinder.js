/**
 * determine if a string contains only digits
 *
 */

function finder(chain){
    if(isNaN(Number(chain))){
        return `${chain}\tNot Only Digits..`
    }
    return `${chain}\tContains Only Digits !`
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
console.log(`${finder(chain3)}\t\t\t\t\tAnswer: Not Only Digits..`);
console.log(`${finder(chain4)}\t\t\t\t\tAnswer: Not Only Digits..`);
console.log(`${finder(chain5)}\t\t\t\t\tAnswer: Not Only Digits..`);
