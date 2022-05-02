/**
 * calculate the largest sum contiguous and limit indices sub array
 *
 */

function largestSumContiguousAndLimitsSubArray(ts) {
  if (ts.length !== 0) {
    let max_so_far = Number.MIN_VALUE, max_ending_here = 0, start = 0, end = 0, s = 0

    for (i = 0; i < ts.length; i++) {
      max_ending_here += ts[i]

      if (max_so_far < max_ending_here) {
        max_so_far = max_ending_here
        start = s
        end = i
      }

      if (max_ending_here < 0) {
        max_ending_here = 0
        s = i + 1
      }
    }
    return `Max cont. sum: ${max_so_far}, Start: ${start}, End: ${end}`
  }
  return "Empty Array"
}


/**
 * Here begin test part 
 * 
 */

var chain1 = [7, 5, 9, 2, 4];
var chain2 = [7, 5, -9, -3, 4];
var chain3 = [8, -9, 5, 1, 4];
var chain4 = [];
var chain5 = [1, 0, 10, -10];

console.log(`${largestSumContiguousAndLimitsSubArray(chain1)}`);
console.log(`${largestSumContiguousAndLimitsSubArray(chain2)}`);
console.log(`${largestSumContiguousAndLimitsSubArray(chain3)}`);
console.log(`${largestSumContiguousAndLimitsSubArray(chain4)}`);
console.log(`${largestSumContiguousAndLimitsSubArray(chain5)}`);