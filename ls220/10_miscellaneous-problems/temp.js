/*
Given an array of values, return a two-element array: the first element is the index of the first '3', and the second element is the index of the last '3'.  Return `[-1, -1]` if no 3's are present in the input array.

Requirements:
	Time complexity O(logN)
	Space complexity: no requirement.

*/

// console.log(findRangeOfThrees([1, 2, 3, 3, 3, 3, 3, 4, 5])); // [2, 6]
// console.log(findRangeOfThrees([1, 2, 5, 5, 6, 9, 10]));      // [-1, -1]
// console.log(findRangeOfThrees([]));                          // [-1, -1]




/* 
v1 idea: binary search for the first 3, then binary search for the last 3




*/

function findSmallest(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] >= target) {
      r = mid - 1;
    } else {
      l = mid + 1;
    }
  }
  return arr[r + 1] === target? r + 1 : -1;
}

console.log(findSmallest([1,2,3], 3))  // 2
console.log(findSmallest([1,2,3,3,3,3], 3))  // 2
console.log(findSmallest([1, 2, 3, 3, 3, 3, 3, 4, 5], 3))  // 2
console.log(findSmallest([], 3))  // -1
console.log(findSmallest([1, 2], 3))  // -1