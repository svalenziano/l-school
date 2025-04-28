// Given a sorted array in ascending order, our task is to find two numbers
// in the array that sum up to a target number, and return them.

// If you don't find a pair that adds up to the target, return null.

// The order of the output array matters, and the number that appears first
// should be the first one in the output array.

// The problem guarantees that there will be either one
// unique pair that matches the target sum or no pairs at all.

// Requirement: `O(n)` time complexity!

// Test Cases:

const nums1 = [1, 3, 6, 7, 8, 12];
const target1 = 14;
console.log(findPair(nums1, target1)); // Output: [6, 8]

const nums2 = [2, 6, 8, 10];
const target2 = 17;
console.log(findPair(nums2, target2)); // null

const nums3 = [1, 2, 5, 11, 15];
const target3 = 7;
console.log(findPair(nums3, target3)); // [2, 5]

/*
IDEA: If number is too small, move left pointer right.  If number is too large, move right pointer left.  If number is just right, return left and right VALUES. If left moves to the right of right, return null.
*/

function findPair(nums, target) {
  let l = 0;
  let r = nums.length - 1;
  while (l < r) {
    if (nums[l] + nums[r] === target) {
      return [nums[l], nums[r]];
    }
    if (nums[l] + nums[r] < target) {
      l++;
    } else {
      r--;
    }
  }
  return null;
}