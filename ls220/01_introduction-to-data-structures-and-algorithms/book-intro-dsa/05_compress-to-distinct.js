// Given a sorted array of integers, your task is to implement a function
// `compressToDistinct` that modifies the array in-place to ensure
// it starts with a sequence of distinct elements in their original order.
// After making these modifications, the function should return
// the count of these distinct elements.

// The elements in the latter part of the array, after the distinct ones, are not important.

// Example:

// If the input array is [3, 3, 5, 7, 7, 8], there are four distinct elements: 3, 5, 7, and 8.
// After modifying the array to place these distinct elements at the beginning,
// the resulting array should look like this -> [3, 5, 7, 8, _, _].
// The underscores (_) represent the elements that are no longer important.

// You should name the function `compressToDistinct` for the tests to work correctly.

function testCompressToDistinct(array, expectedLength) {
  const originalReference = array;
  const resultLength = compressToDistinct(array);
  const isSameObject = originalReference === array;
  const isLengthCorrect = resultLength === expectedLength;
  const isModifiedCorrectly = array.slice(0, expectedLength).every((val, idx, arr) => idx === 0 || val > arr[idx - 1]);

  return isSameObject && isLengthCorrect && isModifiedCorrectly;
}

console.log(testCompressToDistinct([3, 3, 5, 7, 7, 8], 4));
console.log(testCompressToDistinct([1, 1, 2, 2, 2, 3, 4, 4, 5], 5));
console.log(testCompressToDistinct([0], 1));
console.log(testCompressToDistinct([-5, -3, -3, -1, 0, 0, 0, 1], 5));
console.log(testCompressToDistinct([6, 6, 6, 6, 6, 6, 6], 1));

// All tests should log true.


/* 
MY SOLVE

P
//////////////////////////////////////////////////
- Given an array, mutate the input array so that in only contains unique integers. Preserve the order of the array.
- INPUT = array of ints
- OUTPUT = none
- RETURN = length of mutated array
- SIDE EFFECT = mutate the array

E
//////////////////////////////////////////////////
console.log(testCompressToDistinct([3, 3, 5, 7, 7, 8], 4));
  3, 3, 5, 7, 7, 8   Start with both anchor & runner at idx 0
  ^^
  3, 3, 5, 7, 7, 8   Numbers are the same, remove the element at the anchor
  ^  ^
  3, 5, 7, 7, 8      Nums are different, move anchor to meet the runner...
  ^  ^
  3, 5, 7, 7, 8      Then increment the runner...
     ^^
  3, 5, 7, 7, 8      Numbers are different.  Move the anchor to meet the runner...
     ^  ^
  3, 5, 7, 7, 8      Then increment the runner ...
        ^^
  3, 5, 7, 7, 8      Numbers are the same, remove the element at the anchor
        ^  ^
  3, 5, 7, 8         Nums are different, Move the anchor to meet the runner.
        ^  ^
  3, 5, 7, 8         Anchor = runner.  Increment runner
           ^^        
  3, 5, 7, 8         Runner is beyond end of array.  Break.
           ^ ^        

  console.log(testCompressToDistinct([6, 6, 6, 6, 6, 6, 6], 1));
  6, 6, 6
  ^^
  6, 6, 6 
  ^  ^

D
//////////////////////////////////////////////////
- none - mutate the existing array

A
//////////////////////////////////////////////////
ANCHOR & RUNNER POINTERS
  - Achor starts where? 0
  - Runner starts where? 0
  - Anchor moves when? Anchor moves to meet runner when Anchor & runner are unequal
  - Runner moves when? Anchor & runner point to same element
  - Anchor addt'l functions? compare value to runner
  - Runner addt'l functions? Comopare value to anchor
  - When's the end? Runner is beyond end

ALGO
  - anchor = 0
  - runner = 0
  - while runner < length - 1
    - if anchor = runner:
      - increment runner
      - continue
    - if the value at anchor === the value at the runner
      - remove the element at the `anchor` index (mutate using splice)
      - continue
    - if value at anchor !== value at runner:
      - move anchor to runner
      - continue
*/

function compressToDistinct(arr) {
  let a = 0;  // anchor
  let r = 0;  // runner
  while (r < arr.length) {
    if (a === r) {
      r += 1;
      continue;
    }
    if (arr[a] === arr[r]) {
      arr.splice(a, 1);
      continue;
    }
    if (arr[a] !== arr[r]) {
      a = r;
      continue;
    }
  }
  return arr.length;
}