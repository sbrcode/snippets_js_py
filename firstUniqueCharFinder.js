/**
 * determine the first character of a string that is unique in the
 * chain
 */

function finder(chain){
    if(typeof chain === "string"){
        chain = chain.toLowerCase();
        for(char of chain){
            let count = chain.split(char).length - 1;
            if(count === 1){
                if(char !== ' '){
                    return char
                }
            }
        }
        return "No unique char !"
    }
    return "Not a String !"
}

/**
 * Here begin test part 
 * 
 */

var chain1 = 'du beurre de baratte';
var chain2 = 'Laval avale et alors?';
var chain3 = ' 1Valvule';
var chain4 = true;
var chain5 = ['agua', 'gwada'];

console.log(`${finder(chain1)}\t\t\tAnswer: No unique char !`);
console.log(`${finder(chain2)}\t\t\t\t\tAnswer: t`);
console.log(`${finder(chain3)}\t\t\t\t\tAnswer: 1`);
console.log(`${finder(chain4)}\t\t\t\tMot a String !`);
console.log(`${finder(chain5)}\t\t\t\tNot a String !`);
