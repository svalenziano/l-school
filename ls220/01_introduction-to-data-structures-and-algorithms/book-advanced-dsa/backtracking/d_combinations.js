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
console.log(testCombinations([1,2,3,4,5], 3, 10)); // C(5,3) = 10
console.log(testCombinations([1,2,3,4,5,6], 4, 15)); // C(6,4) = 15
console.log(testCombinations([1,2,3,4,5,6,7], 3, 35)); // C(7,3) = 35
console.log(testCombinations([1,2,3,4,5,6,7,8], 5, 56)); // C(8,5) = 56
console.log(testCombinations([...Array(10).keys()].map(x => x + 1), 6, 210)); // C(10,6) = 210
console.log(testCombinations([...Array(20).keys()].map(x => x + 1), 10, 184756)); // C(20,10) = 184,756


/* 
MY SOLVE

P
///////////////////////////////////////////////////////////////


E
///////////////////////////////////////////////////////////////
console.log(testCombinations([1,2,3,4], 2, 6)); // C(4,2) = 6
  [1,2][1,3][1,4][2,3][2,4][3,4]

  [1,2,3,4]
    current: [1]  possibilities [2,3,4]
    current: [2]  possibilities [3,4]
    current: [3]  possibilities [4]

console.log(testCombinations([1,2,3,4,5], 3, 10)); // C(5,3) = 10
  [1,2,3][1,2,4][1,2,5][1,3,4][1,3,5]
  [1,4,5][2,3,4][2,3,5][2,4,5][3,4,5]


D
///////////////////////////////////////////////////////////////
Multiple approaches:
  - Non iterative:
    - Backtracking with stack
    - Nested for-loops
  - Recursive backtracking: Array of possibilities
    - Dead end: prune/slice to avoid using the same number more than once
    - Success: length of path is `k` .  Aka, you've collected `k` elements.  

A
///////////////////////////////////////////////////////////////
INPUTS:
  - possibilities = array to explore
  - k = desired length of each result array
LISTS
  - result = [] -> an array to hold one or more result arrays
  - breadcrumbs = []

backtrack(possibilities) (HELPER)
  SUCCESS CRITERIA
    - if breadcrumbs length === k:
      - push a copy to `result`
      - return (follow your breadcrumbs back up the recursion stack)

  FOR i OF POSSIBILITIES
      - (DEAD END)  filter `possibilities` -> remove all instances of `i` 
                                              or any numbers that are smaller than `i`
      - push `i` into your list of breadcrumbs
      -  recursive call, pass filtered possibilities
      - pop a breadcrumb 'on your way out'
*/

function combinations(nums, k) {
  const result = [];
  const breadcrumbs = [];
  backtrack(nums);
  // console.log(result)
  // console.log(result.length)
  return result;

  function backtrack(possibles) {
    if (breadcrumbs.length === k) {
      result.push([...breadcrumbs]);
      return;
    }
    for (let p of possibles) {
      const filtered = possibles.filter((x) => x !== p && x > p);
      breadcrumbs.push(p);
      backtrack(filtered);
      breadcrumbs.pop();
    }
  }
}