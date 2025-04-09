// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`.
// The function should return the length of this
// subarray. If no such subarray exists, return 0.

// The time complexity of your solution should be O(NlogN).

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this subarray is 2.




console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 5, 4, 3], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true
        
        
        
/*
P
//////////////////////////////////////////////////////
RULES
  - contiguous subarray = one or more contiguous elements from the orig. array that summs to >= `target`
  - Order matters!  You may not sort the array.
  - if a num greater than the target is found, return 1:
    - otherwise, you must visit every element, because it's possible that the last element is greater than the target, leading to 

  - Return
    - 0 if no subarray meets the requirements
    - integer = length of shortest subarray that exceeds `target`
    - 


E
//////////////////////////////////////////////////////
My examples & tests:

  console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
    [1, 2, 3]   t:5


*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- v1 
  - min = 0
  - for each `anchor` index between 0 and end
    - Get the midpoint (of the remaining elements)
    - if the num is >= target, return 1
    - if the sum is greater than or equal to the target, 
      - `min` = the minimum btw `min` & the number of elements (anchor - runner + 1)
      - move the `runner` edge of the window left 
    - else
      - move the `runner` edge of the window right

  - how to get the sum with constant, aka O(1), complexity?
    - O(n) option: move back towards anchor, adding as you go
*/



function minLengthForTargetSum(nums, target) {
  let min = 0;
  let r = nums.length - 1;
  for (let l = 0; l < nums.length; l++) {
    r = Math.floor((l + r) / 2);
    if (nums[r] >= target) return 1;
    if (sumExceedsTarget()) {

    }
  }

  function sumExceedsTarget() {
    runner = r;
    sum = nums[l] + nums[r];
    while (sum < target && runner > l) {
      sum += nums[runner]
      if (sum > target) return true
    }
    return false;
  }
}



// LS solution
function isValidLength(k, target, nums) {
  let a = 0;
  let r = 0;
  let sum = 0;

  while (r < k) {
    sum += nums[r];
    r++;
  }
  if (sum >= target) {
    return true;
  }

  while (r < nums.length) {
    sum -= nums[a];
    a++;
    sum += nums[r];
    r++;
    if (sum >= target) {
      return true;
    }
  }

  return false;
}

function minLengthForTargetSum(nums, target) {
  let result = 0;
  let left = 1;
  let right = nums.length;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (isValidLength(mid, target, nums)) {
      result = mid;
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return result;
}
