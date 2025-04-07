
        
        
        
/*
P
//////////////////////////////////////////////////////
// Write a function named `minLengthForTargetSum` that
// determines the minimal length of a contiguous subarray
// within an array of positive integers, `nums`. This
// subarray should have a sum that is greater than or
// equal to a specified positive integer, `target`. The
// function should return the length of this subarray.
// If no such subarray exists, return 0.

// Example:
// Input: nums = [4, 2, 5, 7], target = 10
// Output: 2
// Explanation: In this example, the shortest subarray that
//              meets or exceeds the target sum of 10 is [5, 7].
//              This subarray sums to 12, which is greater than
//              the target sum of 10. The length of this
//              subarray is 2.


console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);

// All test cases should log true


MY RULES
  - "continguous subarray" = portion of the original subarray, in the original order
  - subarray may not be sorted (order may not be changed)


E
//////////////////////////////////////////////////////
My examples & tests:

console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
    8,2,1,4
    ^ ^
*/


/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- v1
  - sort the array
  - use a single pointer to scan from right to left
  - sum = 0;
  - count = 0
  - while sum < target and pointer is >= 0
    - add number at pointer to sum
    - increment counter by 1
  - return count
  - complexity?
    - time: O(n log n) to O(n) for quicksort + O(n) to scan thru array.  O(n) total.
    - space: O(n) for new sorted array

- v2, after viewing hint: "USE ANCHOR-RUNNER POINTER STRATEGY"
  - hint 2: "In this problem, the runner pointer does not advance during every iteration; instead, it pauses whenever the target sum is achieved.
"
  - I'm confused, bc it seems like this wouldn't be any faster than the above method?
  - Let's just go with it and figure out an anchor-runner method
  - For an un-sorted array, you must iterate thru every element, with a time complexity of O(n), which is no better than my v1 algo?
  - Let's give it a try:
    - start anchor at 0
    - start runner at 1
    - minLength = Infinity
    - while runner is not beyond the end of the array:
      - sum = get slice of nums between anchor and runner (not inclusive of runner)
      - if sum >= target:
        - update minLength with the subarray length (use Math.min)
        - if window is only one wide, move the window right
        - else:
          - increment the anchor ONLY, to see if a smaller window is possible.  
      - if sum < target
        - increment runner (make window bigger)
    - if minLength is stil Infinity, return 0
    - else:
      - return minLength

*/

// LS TESTS
console.log(minLengthForTargetSum([1, 2, 3], 5) === 2);
console.log(minLengthForTargetSum([1, 1, 1], 4) === 0);
console.log(minLengthForTargetSum([8, 2, 1, 4], 8) === 1);
console.log(minLengthForTargetSum([1, 2, 3, 4, 5], 9) === 2);
console.log(minLengthForTargetSum([1, 4, 1, 3, 6, 2], 9) === 2);
console.log(minLengthForTargetSum([1, 2, 3, 4], 10) === 4);
console.log(minLengthForTargetSum([1, 2, 6, 1, 1, 7], 9) === 3);
console.log(minLengthForTargetSum([4, 2, 2, 1, 5, 2], 14) === 5);


// my solve, using v2 algo
function minLengthForTargetSum(nums, target) {
  let anchor = 0;
  let runner = 1;
  let minLength = Infinity;
  while (runner <= nums.length) {
    let sum = nums
      .slice(anchor, runner)
      .reduce((accum, ele) => accum + ele)
    // console.log(anchor, runner, sum)
    let windowSize = runner - anchor;
    if (sum >= target) {
      minLength = Math.min(minLength, windowSize)
      // move window right
      if (windowSize === 1) {
        anchor += 1;
        runner += 1;
      // make window smaller
      } else {
        anchor += 1;
      }
    // make window larger
    } else {
      runner += 1;
    }
  }
  if (minLength === Infinity) return 0;
  // console.log(minLength)
  return minLength; 
}


// LS solution
// comments are mine
/* 
This solution doesn't explicity ensure that window is at least "1 element wide", but the `currentSum >= target` comparison effectively does so, since a window size of 0 would result in a currentSum of 0
*/
function minLengthForTargetSum(nums, target) {
  let result = nums.length + 1; // dummy value.  Should be replaced if at least valid solution is found
  let currentSum = 0;
  let anchor = 0;
  let runner = 0;

  // while runner has not gone beyond end of `nums`
  while (runner < nums.length) {  
    currentSum += nums[runner];
    // if target is surpassed, update result and currentSum
    while (currentSum >= target) {
      result = Math.min(result, runner - anchor + 1);
      currentSum -= nums[anchor];
      anchor++;
    }
    runner++;  // runner moves with every iteration
  }
  // return 0 if nums.length hasn't been modified
  return result === nums.length + 1 ? 0 : result;
}