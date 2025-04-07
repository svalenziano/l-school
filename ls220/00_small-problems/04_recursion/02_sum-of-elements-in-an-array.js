
        
        
        
/*
P
//////////////////////////////////////////////////////
Input = array of ints
Return = sum of all elements
Rules = use recursion!

console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.

E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
Base case = no more elements
Recursive def
  - The "sum of elements in an array" is the last element of the array plus "the sum of elements in the array (array with one element removed)"
*/

// LS TESTS
console.log(sum([1, 2, 3]) === 6);
console.log(sum([10, 15, 20, 10, 5]) === 60);
console.log(sum([-5, -1, 5, 2, -3]) === -2);
console.log(sum([7]) === 7);
console.log(sum([]) === 0);

// All test cases should log true.




// my solve 1 - inefficient
// O(n) time complexity
// O(n^2) space complexity, because a new array is created with each recursive call
// function sum(arr) {
//   if (arr.length === 0) return 0;  // O(1)
//   return arr[arr.length - 1] + sum(arr.slice(0, arr.length - 1))  // O(1) + O(n)
// }




/* 
my solve 2 - pointer
- base case = pointer is greater than length of of array, return 0
- recursive def = 'the sum of elements in an array' is the first value plus the 'sum of the rest of the elements in the array'
Algo v2:
  - start with pointer at index 0
  - return sum(arr, pointer = 0)
    - if pointer === length
      - return 0
    - return arr[pointer] + sum(arr, pointer + 1)

Time complexity: O(n)
Space complexity: O(n) -> recursive stack plus a new integer pointer for each recursion
*/

function sum(arr) {
  return sumHelper(arr)

  function sumHelper(arr, pointer = 0) {
    if (pointer === arr.length) return 0;
    return arr[pointer] + sumHelper(arr, pointer + 1);
  }
}
