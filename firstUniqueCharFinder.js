/**
 * determine the first character of a string that is unique in the
 * chain
 */

function finder(chain){

}

/**
 * Here begin test part 
 * 
 */

var chain1 = 'du beurre de baratte';
var chain2 = 'Laval avale et alors?';
var chain3 = '1 Valvule';
var chain4 = true;
var chain5 = ['agua', 'gwada'];

console.log(`${finder(chain1)}\t\t\t\tAnswer: no unique char !`);
console.log(`${finder(chain2)}\t\t\t\t\tAnswer: o`);
console.log(`${finder(chain3)}\t\t\t\t\tAnswer: 1`);
console.log(`${finder(chain4)}\t\t\t\tMot a String !`);
console.log(`${finder(chain5)}\t\t\t\tNot a String !`);
