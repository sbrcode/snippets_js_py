/**
 * calculate the integer closest to Zero
 *
 */

 function computeClosestToZero(ts){
  if (ts.length > 0 && ts.length <= 10000) {
    const tsAbs = ts.map(val => Math.abs(val));
    res = Math.min(...tsAbs);
    if (ts.indexOf(res) !== -1) {
      return res;
    } else {
      return -res;
    }
  }
  return 0
}


/**
 * Here begin test part 
 * 
 */

var chain1 = [7, 5, 9, 2, 4];
var chain2 = [7, 5, -9, -3, 4];
var chain3 = [9, 5, 1, -9, -1, 4];
var chain4 = [];
var chain5 = [1, 0, 10, -10];

console.log(`${computeClosestToZero(chain1)}`);
console.log(`${computeClosestToZero(chain2)}`);
console.log(`${computeClosestToZero(chain3)}`);
console.log(`${computeClosestToZero(chain4)}`);
console.log(`${computeClosestToZero(chain5)}`);
