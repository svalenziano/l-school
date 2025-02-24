/*
P
  INPUT = 2 arrays
  output = array = union of the 2 arrays, with no duplicate values
  REQS
    - IMPLICIT
      - ascending order
E
D
A
*/

// TESTS
console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]


// MY SOLUTION
/* 
ALGO
- create copy of first array
- for each element in the second array
- if the element doesn't exist in the first array, push that value (append to end)
- return the new array
 */



// function union(arr1, arr2) {
//   arr3 = arr1.slice();
//   for (let ele of arr2) {
//     if (!arr3.includes(ele)) {
//       arr3.push(ele);
//     }
//   }
//   return arr3;
// }

// more general solution
function copyNonDuplicates(arrayToModify, sourceArray) {
  sourceArray.forEach(function (element) {
    if (!arrayToModify.includes(element)) {
      arrayToModify.push(element)
    }
  });
}

function union(...arrays) {
  let newArray = [];
  arrays.forEach((array) => copyNonDuplicates(newArray, array));
  return newArray;
}