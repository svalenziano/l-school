// Write a function named `findZeroPosition` that takes in a
// sorted array of distinct integers as input.
// The function should return the index where the value 0 is
// found in the array, or the index where it would be inserted if
// it were not found.

// If the value 0 is found in the array, the function should
// return the index of the value 0. If the value 0 is not found,
// the function should return the index where it would be inserted
// while maintaining the sorted order of the array.

// Example:
// Input: nums = [-7, -5, -3, 0, 2]
// Output: 3

// Example:
// Input: nums = [3, 5, 7, 9, 11]
// Output: 0

console.log(findZeroPosition([-7, -5, -3, 0, 2])); // 3
console.log(findZeroPosition([3, 5, 7, 9, 11])); // 0
console.log(findZeroPosition([-8, -7, -5, -2, -1])); // 5



/* 
MY SOLVE
////////////////////////////////////////
////////////////////////////////////////

P
////////////////////////////////////////
Input = sorted array of integers
Return = index of the zero, or where the zero WOULD BE


E
////////////////////////////////////////
EXAMPLE 1
  [-7, -5, -3, 0, 2]
  ^         ^     ^
  [-7, -5, -3, 0, 2] -> 3
              ^^  ^ 

EXAMPLE 2
  [-8, -7, -5, -2, -1]  Find midpoint, compare to target
  ^         ^       ^
  [-8, -7, -5, -2, -1]  Set left point and and midpoint, compare to target
                ^^  ^
  [-8, -7, -5, -2, -1]  Set left point and midpoint, compare to target
                  ^^^
  [-8, -7, -5, -2, -1]  Set left point and midpoint, compare to target
                    ^^^
                        Left now exceeds right, return left

EXAMPLE 3
  [3, 5, 7, 9, 11]
   ^     ^
  [3, 5, 7, 9, 11]
   ^^ ^
  [3, 5, 7, 9, 11]      Right is now less than left
 ^^^ 
D
////////////////////////////////////////
Pointers: Left, right, and mid 

A
////////////////////////////////////////
- left = 0
- right = length - 1
- while left is less than right:
  - mid = Find midpoint (round down to nearest int using floor)
  - Compare midpoint to target
    - equal? return value
    - less than? set left to mid + 1
    - greater than? set right to mid - 1
- return left
*/

function findZeroPosition(arr, target=0) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

