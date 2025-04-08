// Write a function `findMax` that finds the maximum element in
// a rotated sorted array.

// A rotated sorted array is an array that was originally sorted
// in ascending order, but has been rotated (shifted) by some
// number of positions. The function should take an array of
// integers as input, representing the rotated sorted array,
// and it should return the maximum element in the array.
// The array is guaranteed to have at least one element.

// The solution should be in O(logN) time complexity.

// Example:
// Input: nums = [8, 9, 10, 2, 5, 6]
// Output: 10
// Explanation: The original sorted array [2, 5, 6, 8, 9, 10]
//              was rotated 3 times.

function findMax(nums) {
    // implementation goes here
}

console.log(findMax([7, 8, 2, 3, 4, 5, 6]) === 8);
console.log(findMax([23, 34, 38, 40, 41, 14, 15, 16, 17, 18, 19, 20, 21]) === 41);
console.log(findMax([8, 9, 10, 2, 5, 6]) === 10);
console.log(findMax([15, 18, 2, 3, 6, 12]) === 18);
console.log(findMax([3, 1]) === 3);
console.log(findMax([5]) === 5);
console.log(findMax([9, 10, 11, 12, 13, 14, 15, 1, 2, 3]) === 15);
console.log(findMax([4, 5, 1, 2, 3]) === 5);
console.log(findMax([100, 200, 300, 400, 500]) === 500);
console.log(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]) === 63);
console.log(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]) === 21);
        
        
        
/*
P
//////////////////////////////////////////////////////

Rules:
  - it appears that if you use Math.floor to find the midpoint, you can 'follow' the greater of the values on either side of the midpoint.

E
//////////////////////////////////////////////////////
My examples & tests:

Searching in increasing direction succeeds:
console.log(findMax([45, 47, 49, 51, 53, 55, 57, 59, 61, 63, 44]) === 63);
                      0   1   2   3  4   5   6    7   8   9   10
                                             0    1   2   3   4

- Searching in increasing direction MAY FAIL!  
- Works: Math.floor, then check both sides of midpoint, go in direction of greatest val.  
- midpoint w/ Math.ceil wouldn't work.
console.log(findMax([15, 18, 2, 3, 6, 12]) === 18);
                      0   1  2  3  4   5
                      0  1

- Both vals on either side of Math.floor midpoint are less than.  Follow the greater
console.log(findMax([8, 9, 10, 2, 5, 6]) === 10);

- follow greater of value on either side of midpoint
console.log(findMax([4, 5, 1, 2, 3]) === 5);


- follow greater of value on either side of midpoint
- record midpoint as `max` before searching left
console.log(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]) === 21);
                      0   1   2   3   4   5  6  7  8  9  10
                      0   1   2   3   4   5

console.log(findMax([11, 13, 15, 17, 19, 21, 1, 3, 5, 7, 9]) === 21);
                     0   1    2   3   4   5  6  7  8  9  10

- UH OH
- MY LOGIC FOR FINDING MIDPOINT IS FAULTY?
- or ... override for if first element is greater than?
console.log(findMax([7, 8, 2, 3, 4, 5, 6]) === 8);
                     0  1  2  3  4  5  6
                              0  1  2  3  <- oh no, my logic sends us in the wrong direction!


*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////


*/


// my solve (partially working)
function findMax(arr) {
  let l = 0, r = arr.length - 1, max = 0;
  while (l <= r) {
    let midpoint = Math.floor((l + r) / 2);
    max = Math.max(arr[midpoint], max)
    let rNeighbor = arr[midpoint + 1];
    let lNeighbor = arr[midpoint - 1];
    // Search right if rNeighbor is valid value & greater than lNeighbor
    if (rNeighbor > (lNeighbor ?? 0)) {
      l = midpoint + 1;
    } else {
      r = midpoint - 1;
    }
  }
  console.log(max)
  return max;
}



// ls solve
function findMax(nums) {
  let left = 0;
  let right = nums.length - 1;
  let firstElem = nums[0];
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let midNumber = nums[mid];

    // if we're at index 0 OR the value to the left is less than midNumber
    // AND we're at the last index OR the value to the right is less than midNumber
    if ((mid === 0 || nums[mid - 1] < midNumber) && (mid === nums.length - 1 || nums[mid + 1] < midNumber)) {
      return midNumber;

    // If midpoint number is less than first element, search left
    } else if (midNumber < firstElem) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
}