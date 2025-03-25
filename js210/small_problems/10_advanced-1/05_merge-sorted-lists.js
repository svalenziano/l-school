"use strict";
/*
P
  Given 2 sorted arrays, merge the two arrays into a single sorted array.
  Don't use any high level functions/methods.  Build the new array using looping, one element at a time
E
D
A
*/

// TESTS
// console.log(merge([1, 5, 9], [2, 6, 8]));      // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
// console.log(merge([], [1, 4, 5]));             // [1, 4, 5]
// console.log(merge([1, 4, 5], []));             // [1, 4, 5]


// MY SOLUTION

/* 
P
//////////////////////////////


E
//////////////////////////////
console.log(merge([1, 1, 3], [2, 2]));         // [1, 1, 2, 2, 3]
[1 , 2] -> pop and push 1
[1, 2] ->  pop and push 1
[3, 2] ->  pop and push 2
[3, 2] ->  pop and push 2 


D
//////////////////////////////


A
//////////////////////////////
TRY 2 (FAIL)
- result array = []
- get max length
- indexA = 0
- indexB = 0
- while indexA OR indexB are less than maxLength
  - get value A and B
  - for each value A and B, determine comparison value using 0 as default using ??
    - if comparison value of A is greater than the comparison value of B
      - push B
      - increment indexB
    - else:
      - push A
      - increment indexA
- return the result array

TRY 3
- arr1 = create copy
- arr2 = create copy
- result = []
- while both arrays still have elements:
  - if arr1[0] is greater than arr2[0]:
    - pop from arr2 and push onto result
  - else
    - pop from arr1 and push onto result
- push the concatenation of arr1 and arr2 onto result
- return result

TEST
[1,1,3], [2,2]
result [1]         [1,3] [2,2]
result [1,1]       [3]   [2,2]
result [1,1, 2]    [3]   [2]
result [1,1,2,2]   [3]   []


*/

function mergeGARBAGE(arr1, arr2) {
  let result = [];
  let maxLength = Math.max(arr1.length, arr2.length);
  let indexA = 0;
  let indexB = 0;
  let conditionalPush = (x) => typeof x === 'number' ? result.push(x) : null
  while (indexA < maxLength || indexB < maxLength) {
    let valA = arr1[indexA];
    let valB = arr2[indexB];
    if ((valA ?? 0) > (valB ?? 0)) {
      conditionalPush(valB);
      indexB += 1;
    } else {
      conditionalPush(valA);
      indexA += 1;
    }
  }
  return result
}

function merge(arr1, arr2) {
  arr1 = arr1.slice();
  arr2 = arr2.slice();
  let result = [];
  while ((arr1.length > 0) && (arr2.length > 0)) {
    if (arr1[0] > arr2[0]) {
      result.push(arr2.shift());
    } else {
      result.push(arr1.shift())
    }
    console.log(result)
  }
  result.push(...arr1, ...arr2);
  return result
}