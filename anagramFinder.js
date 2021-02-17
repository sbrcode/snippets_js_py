/**
 * determine if 2 strings are anagrams
 * 
 */

function finder(val1, val2){
    if(typeof val1 === "string" && typeof val2 === "string"){
        return true
    }
    return false
}


/** Here begin test part */

var value11 = "nacre";var value12 = "rance";
var value21 = "tenancières";var value22 = "cannetières";
var value31 = "vaginales";var value32 = "Galvanise";
var value41 = "cador";var value42 = "crade";
var value51 = "jeudi";var value52 = true;

console.log(`${finder(value11, value12)}\t\t\t\tAnagram? true`);
console.log(`${finder(value21, value22)}\t\t\t\tAnagram? true`);
console.log(`${finder(value31, value32)}\t\t\t\tAnagram? true`);
console.log(`${finder(value41, value42)}\t\t\t\tAnagram? false`);
console.log(`${finder(value51, value52)}\t\t\t\tAnagram? false`);
