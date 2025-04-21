// Create a function `permutations` that takes an array of unique integers, `nums`, and
// returns all possible arrangements (permutations) of these numbers.

// The input array will contain at most 8 numbers.

// Example:

  // Input: [1,2,3]
  // Output: [
  //          [1, 2, 3],[1, 3, 2],[2, 1, 3],
  //          [2, 3, 1], [3, 1, 2], [3, 2, 1]
  //                                          ]

function testPermutations(input, expectedLength) {
  const result = permutations(input);
  if (result.length !== expectedLength) return false;

  const stringifiedPerms = result.map(JSON.stringify);
  const uniquePerms = new Set(stringifiedPerms);
  return uniquePerms.size === expectedLength;
}

// Test Cases:

console.log(testPermutations([1,2,3], 6));
console.log(testPermutations([1, 1, 1], 6));
// console.log(testPermutations([0,1], 2));
// console.log(testPermutations([1], 1));
// console.log(testPermutations([1,2,3,4], 24));
// console.log(testPermutations([1,2,3,4,5], 120));
// console.log(testPermutations([1,2,3,4,5,6], 720));
// console.log(testPermutations([1,2,3,4,5,6,7], 5040));
// console.log(testPermutations([1,2,3,4,5,6,7,8], 40320));
// console.log(testPermutations([0,1,2,3,4,5,6,7,8,9], 3628800));

// Note: The order of permutations in the output doesn't matter,
// as long as all permutations are present.

// Don't run the last case for the naive-branch solution.
// If you do and your machine seems "stuck" press `CTRL+Z`


/* 
VARS:
- candidate [] (stack)
- visited - empty Set
- result []

SUCCESS
  - length of solution = length of input array

ITERATION
  - for each index
  DEAD-END / PRUNING
    - if requested index is in `visited` set?
      - return 
    SETUP
      - push element at index to `candidate` stack
      - add index to set so it's not revisited by any recursive calls
    RECURSE
      - recursive call!
    CLEANUP
      - pop element off `candidate` stack
      - remove index from `visited` set
      - 

 */

 // my solution
function permutations(arr) {
  let candidate = [];
  let visited = new Set();
  let result = [];

  backtrack();
  console.log(result)
  return result;

  function backtrack() {
    if (candidate.length === arr.length) {
      result.push([...candidate]);
    }
    for (let idx = 0; idx < arr.length; idx++) {
      if (visited.has(idx)) {
        continue;
      }
      // setup
      visited.add(idx);
      candidate.push(arr[idx])
      // recurse
      backtrack();
      // cleanup
      candidate.pop()
      visited.delete(idx)
    }
  }

}


