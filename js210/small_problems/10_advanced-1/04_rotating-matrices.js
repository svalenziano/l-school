/*
P
  Take an arbitrary M x N matrix and rotate it 90 degrees clockwise
  INPUT = m x n matrix (nested array)
  RETURN = n x m matrix, rotated 90 degrees from input
  SIDE EFFECTS = none
  OUTPUT = NONE
  RULES:

E
D
A
*/

// LS TESTS
const matrix1 = [
  [1, 5, 8],
  [4, 7, 2],
  [3, 9, 6],
];

const matrix2 = [
  [3, 7, 4, 2],
  [5, 1, 0, 8],
];

const newMatrix1 = rotate90(matrix1);
const newMatrix2 = rotate90(matrix2);
const newMatrix3 = rotate90(rotate90(rotate90(rotate90(matrix2))));

console.log(newMatrix1);      // [[3, 4, 1], [9, 7, 5], [6, 2, 8]]
console.log(newMatrix2);      // [[5, 3], [1, 7], [0, 4], [8, 2]]
console.log(newMatrix3);      // `matrix2` --> [[3, 7, 4, 2], [5, 1, 0, 8]]



// MY SOLUTION

function arraysAreEqual(arr1, arr2) {
  return JSON.stringify(arr1) === JSON.stringify(arr2);
}

// console.log(arraysAreEqual([1,2,3], [1,2,3]) === true);
// console.log(arraysAreEqual([[1,2,3],[1,2,3]], [[1,2,3],[1,2,3]]) === true);
// console.log(arraysAreEqual([[0,2,3],[1,2,3]], [[1,2,3],[1,2,3]]) === false);
// console.log(arraysAreEqual([1,2,3], [3,2,1]) === false);

/*
P
///////////////////////////////////////////
rules
  - reversed first column becomes first row
  PUT ANOTHER WAY
  - To make the first row, reverse the first column
  - to make the second row, reverse the second column
  PUT ANOTHER WAY
  - THe NEW nth row is equal to the OLD nth column, reversed
E
///////////////////////////////////////////
BEFORE
  [3, 7, 4, 2],
  [5, 1, 0, 8],
AFTER
[ [5, 3], 
  [1, 7], 
  [0, 4], 
  [8, 2]]

r = row
c = column



D
///////////////////////////////////////////


A
///////////////////////////////////////////
V1 HIGH LEVEL
  - for each old column (btw 0 and length of first nested array):
    - for each column element, starting with the last element
      - build the new row
  - return the rotated array


*/

function rotate90(matrix) {
  let result = [];
  for (let col = 0; col < matrix[0].length; col++) {
    result.push([]);
    for (let row = matrix.length - 1; row >= 0; row--) {
      result[col].push(matrix[row][col]);
    }
  }
  return result;
}