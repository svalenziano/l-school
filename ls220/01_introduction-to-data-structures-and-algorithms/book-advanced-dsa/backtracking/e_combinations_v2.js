// Create a function `combinations` that takes an array of integers and an
// integer, k, and returns all possible combinations of k numbers chosen
// from the array. The input array will contain at most 20 numbers.

// Example:
// Input: nums = [1,2,3,4], k = 2
// Output: [
//   [1,2], [1,3], [1,4], [2,3], [2,4], [3,4]
// ]

function testCombinations(nums, k, expectedLength) {
  const result = combinations(nums, k);
  if (result.length !== expectedLength) return false;

  const stringifiedCombs = result.map(JSON.stringify);
  const uniqueCombs = new Set(stringifiedCombs);
  return uniqueCombs.size === expectedLength;
}

// Test Cases:
console.log(testCombinations([1,2,3,4], 2, 6)); // C(4,2) = 6
// console.log(testCombinations([1,2,3,4,5], 3, 10)); // C(5,3) = 10
// console.log(testCombinations([1,2,3,4,5,6], 4, 15)); // C(6,4) = 15
// console.log(testCombinations([1,2,3,4,5,6,7], 3, 35)); // C(7,3) = 35
// console.log(testCombinations([1,2,3,4,5,6,7,8], 5, 56)); // C(8,5) = 56
// console.log(testCombinations([...Array(10).keys()].map(x => x + 1), 6, 210)); // C(10,6) = 210
// console.log(testCombinations([...Array(20).keys()].map(x => x + 1), 10, 184756)); // C(20,10) = 184,756


/* 
SV PLANNING


v1
Provides all possible combos, including those where combo is a differently-ordered 'duplicate' of a previously used combo

VARS:
  - Candidate
  - Result
  - Set of `Visited` indices (allows duplicate input array values)

HELPER:
  SUCCESS
    - candidate length is `k` elements long
  FOR EACH INDEX BTW 0 AND LEGNTH OF INPUT ARRAY
    DEAD END / PRUNING
      - current index is in `visited` set?
        - continue w/ next index
    SETUP
      - add current index to `visited`
      - add value at index to `candidate`
    RECURSE
      - recurse
    CLEANUP
      - pop value off candidate
      - remove current index from `visited`


*/


function combinations(nums, k) {
  let candidate = [];
  let result = [];
  let visited = new Set();
  backtrack();
  console.log(result)
  return result;

  function backtrack() {
    // success?
    if (candidate.length === k) {
      result.push([...candidate]);
      return;
    }
    for (let idx = 0; idx < nums.length; idx++) {
      // dead end / pruning
      if (visited.has(idx)) {
        continue;
      }
      //setup
      visited.add(idx);
      candidate.push(nums[idx])
      // recurse
      backtrack();
      // cleanup
      candidate.pop();
      visited.delete(idx);
    }
  }
}

/* 
How to calculate all unique order-agnostic combos?  Ex: [1, 2] and [2, 1] are considered identical, so [2, 1] should NOT be added  

Use a set of `visited` VALUES rather than a set of INDICES
*/

// function combinations(nums, k) {
//   let candidate = [];
//   let result = [];
//   let visited = new Set();
//   backtrack();
//   // console.log(result)
//   console.log(result)
//   return result;

//   function backtrack(start=0) {
//     // success?
//     if (candidate.length === k) {
//       result.push([...candidate]);
//       return;
//     }
//     for (let idx = start; idx < nums.length; idx++) {
//       // dead end / pruning

//       // if (visited.has(value)) {
//       //   continue;
//       // }
//       //setup
//       // visited.add(value);
//       candidate.push(nums[idx])
//       // recurse
//       backtrack(idx + 1);
//       // cleanup
//       candidate.pop();
//       // visited.delete(value);
//     }
//   }
// }

// LS solution
// function combinations(candidates, k) {
//   function backtrack(candidates, candidate, result, position) {
//     if (candidate.length === k) {
//       result.push([...candidate]);
//       return;
//     }
//     for (let idx = position; idx < candidates.length; idx++) {
//       const elem = candidates[idx];
//       candidate.push(elem);
//       backtrack(candidates, candidate, result, idx + 1);
//       candidate.pop();
//     }
//   }

//   const result = [];
//   const candidate = [];
//   let position = 0;
//   backtrack(candidates, candidate, result, position);
//   return result;
// }