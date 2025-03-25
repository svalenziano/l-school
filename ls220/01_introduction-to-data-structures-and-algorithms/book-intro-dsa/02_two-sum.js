// Given a sorted array in ascending order, our task is to find two numbers
// in the array that sum up to a target number, and return them.

// If you don't find a pair that adds up to the target, return null.

// The order of the output array matters, and the number that appears first
// should be the first one in the output array.

// The problem guarantees that there will be either one
// unique pair that matches the target sum or no pairs at all.

// Test Cases:

const nums1 = [1, 3, 6, 7, 8, 12];
const target1 = 14;
console.log(findPair(nums1, target1)); // Output: [6, 8]

const nums2 = [2, 6, 8, 10];
const target2 = 17;
console.log(findPair(nums2, target2)); // null



// ALGO 1: BRUTE FORCE
/* 
- for each firstIdx between 0 and length minus 2 (all but the last element):
  - for each secondIdx btw firstIdx + 1 and length minus 1:
    - compare sum of first and second number to the target
    - if sum matches target:
      - return array: [first num, second num]
- return null

Complexity: O(n^2)
*/

// ALGO 2: START-END POINTER
/* 
- When should I move the start pointer?
- When should I move the end pointer?
- Does the start pointer do something besides moving?
- Does the end pointer do something besides moving?
- Under which condition do we stop the iteration?
*/