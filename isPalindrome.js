/**
 * determine if a given string is a palindrome
 *
 */

function finder(chain){
    if(typeof chain === "string"){
        var re = /[\W_]/g;
        // returns a new string with some or all matches of a pattern replaced by a replacement
        var lowRegStr = chain.toLowerCase().replace(re, '');
        var reverseStr = lowRegStr.split('').reverse().join('');
        if(reverseStr === lowRegStr){
            return `${chain}\n\tis a palindrome.`
        }
    }
    return `${chain}\n\tis not a string input !`
}

function finder_2(chain){
    if(typeof chain === "string"){
        var re = /[\W_]/g;
        // returns a new string with some or all matches of a pattern replaced by a replacement
        chainMod = chain.toLowerCase().replace(re, '');
        var len = chainMod.length;
        for(var i = 0; i < len/2; i++){
            if(chainMod[i] === chainMod[len - 1 - i]){
                return `${chain}\n\tis a palindrome.`
            }
        }
    }
    return `${chain}\n\tis not a string input !`
}

/**
 * Here begin test part 
 * 
 */

var chain1 = 'Laval';
var chain2 = '156651';
var chain3 = 12321;
var chain4 = 'semâmes';
var chain5 = "A man, a plan, a canal, Panama";

console.log("----1st function---");
console.log(`${finder(chain1)}\t\t\t\tis Palindrome !`);
console.log(`${finder(chain2)}\t\t\t\tis Palindrome !`);
console.log(`${finder(chain3)}\t\t\t\tis not a string input !`);
console.log(`${finder(chain4)}\t\t\t\tis Palindrome !`);
console.log(`${finder(chain5)}\t\t\t\tis Palindrome !`);

console.log("\n----2nd function---");
console.log(`${finder_2(chain1)}\t\t\t\tis Palindrome !`);
console.log(`${finder_2(chain2)}\t\t\t\tis Palindrome !`);
console.log(`${finder_2(chain3)}\t\t\t\tis not a string input !`);
console.log(`${finder_2(chain4)}\t\t\t\tis Palindrome !`);
console.log(`${finder_2(chain5)}\t\t\t\tis Palindrome !`);