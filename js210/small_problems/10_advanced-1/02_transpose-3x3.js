/*
P
========================================================================
input = matrix (nested array)
return = matrix, transposed
output = none
side effects= NONE - DO NOT MUTATE



E
========================================================================
*/
// LS EXAMPLES
const matrix = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const newMatrix = transpose(matrix);

// console.log(newMatrix);      // [[1, 4, 3], [5, 7, 9], [8, 2, 6]]
console.table(newMatrix)
// console.log(matrix);         // [[1, 5, 8], [4, 7, 2], [3, 9, 6]]
console.table(matrix)

/*
PROBLEM
  - for each original column, append 1st element of each orig row
  - each row of the new array is filled with a column of the old array
  - for each rowIdx of the new array, cycle through the column indexes of the old array  👈

EXPLORE EXAMPLES
  orig indexes
  [
    0,0  1,0  2,0
    0,1  1,1  2,1 
  ]


D
========================================================================
nested array

A
========================================================================
- for each row of the new array (idx btw 0 and length of old rows):
  - append empty row  
- for each col of the new array (idx btw 0 and number of old rows)
    - array[rowIdx].push(oldArray[colIdx][rowIdx])
- return array


*/
// function transpose(matrix) {
//   const result = [];
//   for (let rowIdx = 0; rowIdx < matrix[0].length; rowIdx++) {
//     result.push([]);
//     for (let colIdx = 0; colIdx < matrix.length; colIdx++) {
//       result[rowIdx].push(matrix[colIdx][rowIdx]);
//     }
//   }
//   return result;
// }

// simpler solution
function transpose(matrix) {
  return matrix[0].map((_, i) => matrix.map((_, j) => matrix[j][i]));
}