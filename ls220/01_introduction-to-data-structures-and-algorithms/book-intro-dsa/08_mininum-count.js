// Given an array `nums` sorted in ascending order, determine
// the minimum between the count of positive integers and the
// count of negative integers.

// Please note that the number `0` is neither positive nor negative.

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);
console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
console.log(minimumCount([-1, 0, 1]) === 1);
console.log(minimumCount([]) === 0);

// All test cases should log true.




// SV SOLVE
/* 
P
///////////////////////////////////////
Given an array of sorted integers, return the minimum between the count of positive ints, and the count of negative ints.  Ex: 4 negative ints and 2 positive ints, return 2.


E
///////////////////////////////////////

console.log(minimumCount([-4, -3, -2, -1, 3, 4]) === 2);
console.log(minimumCount([-3, 1, 2, 3, 4, 5]) === 1);
console.log(minimumCount([-5, -4, -3, -2, -1]) === 0);   -> zero!
  [-5, -4, -3, -2, -1]
  length = 5
  zero pos = 5
  zero is present = false
  count of negs = 5 (zero pos)
  count of pos = 0 (length - zero pos)

console.log(minimumCount([1, 2, 3, 4, 5]) === 0);
console.log(minimumCount([-2, -1, 1, 2]) === 2);
console.log(minimumCount([-7, -5, -4, 1, 2, 6, 10]) === 3);
console.log(minimumCount([-3, -2, -1, 0, 5, 6]) === 2);
  [-3, -2, -1, 0, 5, 6]
  length = 6
  zero pos = 3
  zero is present = true
  count of negs = 3
  count of pos = 2 (lengh - zero pos - zeroIsPresent)
console.log(minimumCount([-1, 0, 1]) === 1);
  [-1, 0, 1]
  length = 3
  zero pos = 1
  zero is present = true
  count of negs = 1 (zeroPos)
  count of pos = 1 (length - zeroPos - zeroIsPresent)
console.log(minimumCount([]) === 0);
  length = 0

D
///////////////////////////////////////


A
///////////////////////////////////////
O(n) v1 algo
  - init count of positive and negative integers
  - for each integer in the array
    - update the count
  - return the minimum count

O(log n) v1 algo
  - find zero position using binary search
  - determine if there's a zero there
  - count of negatives = determine number of digits btw zero pos and beginning of array
  - count of positives = do the same for the end of the array
  - return minimum count
*/

function findTarget(arr, target=0) {
  let left = 0;
  let right = arr.length;
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

function minimumCount(arr) {
  let zeroIdx = findTarget(arr);  // zeroIdx is equal to count of negatives
  let zeroExists = arr[zeroIdx] === 0;
  let countPositives = arr.length - zeroIdx - zeroExists
  return Math.min(zeroIdx, countPositives)
}