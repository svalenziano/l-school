// You are given an array of distinct integers. Your task is to generate all
// possible subsets of this array.

// A subset is a collection of elements from the array, where the order
// doesn't matter, and each element can either be included or not. The empty
// set is considered a subset of every array. Return all subsets of the
// given array. The order of subsets in the output doesn't matter.

// Example 1:
// Input: [5]
// Output: [[],[5]]
// Explanation:
// For a single-element array, there are only two subsets: the empty set and the set containing the element.

// Example 2:
// Input: nums = [1,2,3]
// Output: [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]
// Explanation: This represents all possible subsets, from the empty set to the full set.



function testGenerateSubsets(nums, expected) {
    const result = generateSubsets(nums);
    if (result.length !== expected.length) return false;

    const stringifySubset = subset => subset.sort((a, b) => a - b).join(',');
    const resultSet = new Set(result.map(stringifySubset));
    const expectedSet = new Set(expected.map(stringifySubset));

    return resultSet.size === expectedSet.size &&
           [...resultSet].every(item => expectedSet.has(item));
}

console.log(testGenerateSubsets([1,2,3], [[],[1],[2],[3],[1,2],[1,3],[2,3],[1,2,3]]));
console.log(testGenerateSubsets([5], [[],[5]]));
console.log(testGenerateSubsets([1,2], [[],[1],[2],[1,2]]));
console.log(testGenerateSubsets([1,2,3,4], [[],[1],[2],[3],[4],[1,2],[1,3],[1,4],[2,3],[2,4],[3,4],[1,2,3],[1,2,4],[1,3,4],[2,3,4],[1,2,3,4]]));
console.log(testGenerateSubsets([-1,0,1], [[],[-1],[0],[1],[-1,0],[-1,1],[0,1],[-1,0,1]]));
console.log(testGenerateSubsets([1,2,3,4,5], [
[],[1],[2],[3],[4],[5],
[1,2],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5],[3,4],[3,5],[4,5],
[1,2,3],[1,2,4],[1,2,5],[1,3,4],[1,3,5],[1,4,5],[2,3,4],[2,3,5],[2,4,5],[3,4,5],
[1,2,3,4],[1,2,3,5],[1,2,4,5],[1,3,4,5],[2,3,4,5],
[1,2,3,4,5]
]));
        
        
        
/*
P
//////////////////////////////////////////////////////
Possible subsets = for every `k` between 0 and the length of the array, the list of possible subsets is every possible COMBINATION (not permutation) of `k` integers

E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////
candidates = stack (array) of candidates

A
//////////////////////////////////////////////////////
v1 high level
- for every length `k` between 0 and nums.length:
  - for every startIndex between 0 and nums.length minus `length`
    - create array of length `k` and append to `result`
- return `result`

v1 low level
- result = []
- candidate = []
- for every length `k` btw 0 and nums.length:
  - helper(k)
- return result

HELPER FUNCTION(k = 0)
  SUCCESS
    - candidate length === `k`?
      - push candidate to result
  ITERATION - for every starting idx btw 0 and nums.length minus `k`
    - DEAD END / PRUNING:
      - startIdx = current startIdx + 1
    - SETUP
      - push candidate
    - RECURSE
      - PASS startIdx + 1
    - CLEANUP
      - pop Candidate

*/

// LS TESTS


// my solve

// function generateSubsets(nums) {
//   let result = [];
//   let candidate = [];
//   for (len = 0; len <= nums.length; len++) {
//     backtrack(start=0);
//   }
//   // console.log(result)
//   return result;

//   function backtrack(start=0) {
//     if (candidate.length === len) {
//       result.push([...candidate]);
//       return;
//     }
//     for (let idx = start; idx < nums.length; idx++) {
//       candidate.push(nums[idx]);
//       backtrack(start = start + 1)
//       candidate.pop()
//     }
//   }
// }

//ls solution
function generateSubsets(nums) {
  function backtrack(candidates, candidate, result, position) {
    result.push([...candidate]);

    for (let idx = position; idx < candidates.length; idx++) {
      const elem = candidates[idx];
      candidate.push(elem);
      backtrack(candidates, candidate, result, idx + 1);
      candidate.pop();
    }
  }

  const result = [];
  const candidate = [];
  backtrack(nums, candidate, result, 0);
  // console.log(result)
  return result;
}
