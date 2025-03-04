/*
P
  INPUT = 2 arrays of numbers
  RETURN = single array of numbers.
    Each number represents the product of a number from the first array with a num from the 2nd array
    All possible combinations should be expressed
    Sort in ascending numerical order
E
D
A
*/

// TESTS
console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]


// MY SOLUTION
/* 
- solution = []
- for each number in the first array
  - for each number in the second array
    - append product to solution
- return sorted result
*/

function multiplyAllPairs(arr1, arr2) {
  let multiples = [];
  arr1.forEach((num1) => {
    arr2.forEach((num2) => {
      multiples.push(num1 * num2);
    });
  });
  return [...multiples].sort((a, b) => a - b);
}

