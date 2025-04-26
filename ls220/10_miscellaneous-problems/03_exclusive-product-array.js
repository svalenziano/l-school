'use strict';
// You are given an array of integers. Your task is to create a new array
// where each element is the product of all numbers in the original array
// except the number at that index.

// Implement a function that takes an integer array as input and returns
// a new array where the element at index i is the product of all
// elements in the input array except the element at index i.


// Example 1:

// Input: [2, 3, 4, 5]
// Output: [60, 40, 30, 24]
// Explanation:
    // For index 0: 3 * 4 * 5 = 60
    // For index 1: 2 * 4 * 5 = 40
    // For index 2: 2 * 3 * 5 = 30
    // For index 3: 2 * 3 * 4 = 24

// Example 2:

// Input: [-2, 1, -3, 4]
// Output: [-12, 24, -8, 6]
// Explanation:
    // For index 0: 1 * (-3) * 4 = -12
    // For index 1: (-2) * (-3) * 4 = 24
    // For index 2: (-2) * 1 * 4 = -8
    // For index 3: (-2) * 1 * (-3) = 6

// Note: Your solution must have a time complexity of O(n).




// Test cases
console.log(exclusiveProduct([2, 3, 4, 5]));
// Expected: [60, 40, 30, 24]

console.log(exclusiveProduct([-2, 1, -3, 4]));
// Expected: [-12, 24, -8, 6]

console.log(exclusiveProduct([1, 2, 3, 4]));
// Expected: [24, 12, 8, 6]

console.log(exclusiveProduct([0, 1, 2, 3]));
// Expected: [6, 0, 0, 0]

console.log(exclusiveProduct([1, 1, 1, 1]));
// Expected: [1, 1, 1, 1]

console.log(exclusiveProduct([2, 1, 5, 3]));
// Expected: [15, 30, 6, 10]

console.log(exclusiveProduct([-1, -1, -1, -1]));
// Expected: [-1, -1, -1, -1]

console.log(exclusiveProduct([10]));
// Expected: [1]
        
        
/*
P
//////////////////////////////////////////////////////


E
//////////////////////////////////////////////////////
console.log(exclusiveProduct([0, 1, 2, 3]));
// Expected: [6, 0, 0, 0]
  - if the number is zero, return the "product without zero", otherwise return the product / number


My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- Get the product of the entire array
- For each element of the original array
  - push to result: (product / element)

*/


// my solve
/* 
Time complexity: O(3n), simplified to O(n). O(2n) for the two reduce operations + O(n) for the for-of loop.

Space Complexity: O(n) to store result.


*/
function exclusiveProduct(nums) {
  // Your implementation here
  let product = nums.reduce((accum, ele) => accum * ele, 1)
  let productWithoutZeros = nums.reduce((accum, ele) => accum * (ele || 1), 1)
  let result = [];
  for (let val of nums) {
    if (val === 0) {
      result.push(productWithoutZeros);
    } else {
      result.push(product / val)
    }
  }
  return result;
}


// LS solve, SV comments
/* 
Time complexity: O(2n), simplified to O(n).  O(n) for each of the for-loops.


*/
function exclusiveProduct(nums) {
  const n = nums.length;
  const result = new Array(n).fill(1);
  let prefixProd = 1;
  let suffixProd = 1;

  // first pass (left to right)
  // set each `result` element equal to the prefix (the product of the preceding elements)
  // then update the prefix for the next pass
  for (let i = 0; i < n; i++) {
    result[i] = prefixProd;
    prefixProd *= nums[i];
  }

  // second pass (right to left)
  // multiply each `result` element by the suffix (the product of the rightmost elements)
  // then update suffix for the next pass
  for (let i = n - 1; i >= 0; i--) {
    result[i] *= suffixProd;
    suffixProd *= nums[i];
  }

  return result;
}