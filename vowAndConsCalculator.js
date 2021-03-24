/**
 * calculate the number of vowels and consonants in a string
 *
 */

function finder(chain){
    if(typeof chain === "string"){
        // \u00DF-\u00FF --> from 'ß' to 'ÿ' - Cf. https://en.wikipedia.org/wiki/List_of_Unicode_characters
        chainAlpha = chain.toLowerCase().match(/[a-zA-Z\u00DF-\u00FF]/g);
        // following line could cause issues if other accented consonants as in spanish ñ
        const consList ='bcdfghjklmnñpqrsßtvwxz'
        let vowels = []; let consonants = [];
        for(char of chainAlpha){
            if(consList.includes(char)){
                consonants.push(char)
            }else{
                vowels.push(char)
            }
        }
        let shortAnswer = `'${chain}'\n\tVows: ${vowels.length} - Cons: ${consonants.length}`
        if(chainAlpha.length !== chain.length){
            return shortAnswer + ` - Others: ${chain.length - chainAlpha.length}`
        }
        return shortAnswer
    }
    return `${chain}\n\tis not a string input !`
}

/**
 * Here begin test part 
 * 
 */

var chain1 = 'ßaùâñaó';
var chain2 = 'Nabuchodonosor';
var chain3 = true;
var chain4 = 'part_1';

console.log(`${finder(chain1)}\t\t\t\tVows: 5 - Cons: 2`);
console.log(`${finder(chain2)}\t\t\t\tVows: 6 - Cons: 8`);
console.log(`${finder(chain3)}\t\t\t\tis not a string input !`);
console.log(`${finder(chain4)}\t\t\tVows: 1 - Cons: 3 - Others: 2`);
