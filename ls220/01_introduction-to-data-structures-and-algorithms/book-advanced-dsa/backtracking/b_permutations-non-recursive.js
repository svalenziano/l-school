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
let x = [1,2,3]
console.log(testPermutations(x, 6));
console.log('x=', x)
console.log(testPermutations([0,1], 2));
console.log(testPermutations([1], 1));
console.log(testPermutations([1,2,3,4], 24));
console.log(testPermutations([1,2,3,4,5], 120));
console.log(testPermutations([1,2,3,4,5,6], 720));
console.log(testPermutations([1,2,3,4,5,6,7], 5040));
console.log(testPermutations([1,2,3,4,5,6,7,8], 40320));
console.log(testPermutations([0,1,2,3,4,5,6,7,8,9], 3628800));

// Note: The order of permutations in the output doesn't matter,
// as long as all permutations are present.

// Don't run the last case for the naive-branch solution.
// If you do and your machine seems "stuck" press `CTRL+Z`


/* 
MY SOLVE
- pick the next path (available candidate) from all valid paths and explore it
- for each valid starting point:
  - if next point hasn't already been used (isn't in the current path):
    - add that point to the path
- path = [] = keep track of current path (those already visited)
- end condition = candidates length is 0 
-

*/


// function permutations(candidates) {
//   function backtrack(candidates, candidate, result) {
//     // RECORD VALID SOLUTION
//     if (candidates.length === 0) {
//       result.push([...candidate]);
//       return;
//     }
	
// 	// EXPLORATION LOOP
//     for (let elem of candidates) {
//       if (/* DEAD-END CONDITION */) {  
//         continue;  // PRUNING LOGIC usually goes here
//       }
//       // If element wasn't skipped...
//       candidate.push(elem);  // TAKE (add to candidate solution)
//       backtrack([candidates], candidate, result);  // EXPLORE
//       candidate.pop();  // CLEAN UP (enables exploration of other possibilities)
//       visited.clear();
//     }
//   }

//   const result = [];
//   const candidate = [];
//   const visited = new Set();
//   backtrack([...candidates], candidate, result);
//   return result;
// }

