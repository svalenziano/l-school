// Given an array of numbers, return its majority element.

// The majority element is the value in the array that appears
// as at least half of the elements in the array.

// It is guaranteed that only one majority element exists in the array.

// Test Cases:

console.log(findMajority([6, 4, 4, 6, 4]) === 4);
console.log(findMajority([4, 5, 2, 5, 5, 5, 1]) === 5);
console.log(findMajority([1, 2, 1, 2, 2, 1, 2]) === 2);
console.log(findMajority([1, 2, 3, 1, 4, 4, 1, 1]) === 1);
console.log(findMajority([5, 5, 5]) === 5);

// All test cases should log true


// MY SOLVE - BRUTE FORCE
/* 
P
E
D
A
V1 HIGH LEVEL
  - time = O(n)
  - space = O(n)
  - while iterating through the collection, create dict with count of each element
  - integer = keep track of the largest count.
  - if a larger count is found, update it 
  - when you reach a count that's larger than half the array length
    - return the integer
    - 
V1 LOW LEVEL
  - maxCount = 0
  - for each element of the collection:
    - get count and add one
    - if count is larger than half the array length
      - return the int
    - update the count for that value
*/

function findMajority(arr) {
  let counts = {};
  let threshold = Math.ceil(arr.length / 2);
  for (let int of arr) {
    let count = (counts[int] ?? 0) + 1;
    if (count >= threshold) {
      return int;
    }
    counts[int] = count;
  }
}

