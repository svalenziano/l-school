/*
P
Write a function that rotates the first element to the end of the array.

If arg is not an array, return undefined
If arg is an empty array, return empty array

E
D
A
*/

// TESTS
console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]


// MY SOLUTION
/* 
P
===========================================
Input = array
Return = rotated array
OUTPUT = none
Side Effect = none

Rules
 - Element at first index is removed and pushed to the end of the array
 - arg:
  - not an array , return undefined
  - array length is less than or equal to one, return array
    - empty array, return empty array
    - array of one, return array
  - Return new array : DO NOT MUTATE THE ORIGINAL ARRAY or return a reference to the original array


E
===========================================
[1,2,3,4]
[2,3,4,1]

D
===========================================
array


A
===========================================
- if not an array (use Array.isarray())
  - return undefined
- if length is less than 2:
  - return copy of array (use .slice())
- return (using .concat() method) concatenation of:
      - slice starting from 2nd element (index 1) to the end
      - first element (index 0)



*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length < 2) {
    return [...arr]
  }
  return arr.slice(1).concat(arr[0])
}