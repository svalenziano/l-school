// Implement a function `findRange` that takes in an array of
// integers sorted in ascending order. The function should
// return an array containing the starting and ending
// positions of the number 3 within the array. If the number 3
// is not found, return [-1, -1].

// Example:
// Input: nums = [1, 2, 3, 3, 3, 3, 3, 4, 5]
// Output: [2, 6]

// Example:
// Input: nums = [1, 2, 5, 5, 6, 9, 10]
// Output: [-1, -1]


// Complexity goal:
// Better than linear, aka O(n) 

// Hint:
// Split into `findRightMostIndex` and `findLeftMostIndex`

// LS Tests
console.log(findRangeOfThrees([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
console.log(findRangeOfThrees([1, 2, 5, 5, 6, 9, 10]));      // [-1, -1]
console.log(findRangeOfThrees([]));                          // [-1, -1]


/* 
MY SOLVE
P
  Input = list of ints, sorted ascending
  Output = first and last index of the integer `3` within the input list
    If no 3's are found, return `[-1, -1]`
E
D
A


v1 high level
  - Binary search for any instance of `3`
  - Traverse left to find the first non-3
  - Traverse right to find the first non-3

v2 high level
  -Find start and end points
    - Binary search for instance of sub-array [non-3, 3]
    - Binary search for instance of sub-array [3, non-3]

v2 low level
  - Binary search for instance of sub-array [non-3, 3]
    - left = 0
    - right = length - 1
    - while left <= right
      - mid = floor of midpoint -> (left + right) / 2
      - if ele at mid === target:
        - if element at (((mid - 1))) !== target:  ((())) => comparisonIndex callback
          - return mid
          - continue;
        - else:
          - right = mid - 1
          - continue;
      - if ele at mid > target (3)
        - right = mid - 1
        - continue;
      - else
        - left = mid + 1
  - Binary search for instance of sub-array [3, non-3]
  - 

[1, 2, 3, 3, 3, 3, 3, 4, 5]
 ^           ^           ^
 [1, 2, 3, 3, 3, 3, 3, 4, 5]
 ^   ^     ^
 [1, 2, 3, 3, 3, 3, 3, 4, 5]
     ^  ^  ^


*/

function findRangeOfThrees(arr) {
  return [findLeftMostIndex(arr, 3), findRightMostIndex(arr, 3)]
  // console.log(findLeftMostIndex());
  // console.log(findRightMostIndex())
}

function findLeftMostIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      if (arr[mid - 1] !== target) {
        return mid;
      } else {
        right = mid - 1;
        continue;
      }
    } else if (arr[mid] > target) {
      right = mid - 1;
      continue;
    } else {
      left = mid + 1
    }
  }
  return -1
}

function findRightMostIndex(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      if (arr[mid + 1] !== target) {
        return mid;
      } else {
        left = mid + 1
        continue;
      }
    } else if (arr[mid] < target) {
      left = mid + 1;
      continue;
    } else {
      right = mid - 1;
    }
  }
  return -1
}