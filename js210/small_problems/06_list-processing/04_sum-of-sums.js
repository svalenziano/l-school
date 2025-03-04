/*
P
  INPUT = array of numbers
  OUTPUT = integer = 'sum of each leading subsequence' (see examples)
E
D
A
*/

// TESTS
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35


// MY SOLUTION
/* 
- result = []
- for each endIndex between 1 and length of string:
  - Get slice of array and append the sum to result
- return sum of result
*/

function sumOfSums(array) {
  function sum(array) {
    return array.reduce((accum, ele) => accum + ele);
  }
  
  let result = [];
  // get all possible slices from beginning of array to endIdx
  for (let endIdx = 1; endIdx <= array.length; endIdx++) {
    slice = array.slice(0, endIdx);
    result.push(sum(slice));
  }
  return sum(result);
}