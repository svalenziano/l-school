"use strict";

// You are given a 2D matrix of integers. Your task is to traverse the matrix
// in a spiral order, starting from the top-left corner and moving clockwise.
// Return an array containing all elements of the matrix in the order they
// are visited during the spiral traversal.

// The spiral order moves right, then down, then left, then up, and repeats
// this pattern until all elements have been visited.

// Example 1:
// Input:
// [
//  [10, 20, 30],
//  [40, 50, 60],
//  [70, 80, 90]
// ]
// Output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

// Example 2:
// Input:
// [
//  [1,  2,  3,  4],
//  [5,  6,  7,  8],
//  [9,  10, 11, 12],
//  [13, 14, 15, 16]
// ]
// Output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]


// Test cases
console.log(spiralTraversal([
  [10, 20, 30],
  [40, 50, 60],
  [70, 80, 90]
])); // Expected output: [10, 20, 30, 60, 90, 80, 70, 40, 50]

console.log(spiralTraversal([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16]
])); // Expected output: [1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]

console.log(spiralTraversal([
  [5, 10],
  [15, 20]
])); // Expected output: [5, 10, 20, 15]

console.log(spiralTraversal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12]
])); // Expected output: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15],
  [16, 17, 18, 19, 20]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5],
  [6, 7, 8, 9, 10],
  [11, 12, 13, 14, 15]
])); // Expected output: [1, 2, 3, 4, 5, 10, 15, 14, 13, 12, 11, 6, 7, 8, 9]

console.log(spiralTraversal([
  [42]
])); // Expected output: [42]

console.log(spiralTraversal([
  [1, 2, 3, 4, 5, 6]
])); // Expected output: [1, 2, 3, 4, 5, 6]

console.log(spiralTraversal([
  [1],
  [2],
  [3],
  [4],
  [5],
  [6]
])); // Expected output: [1, 2, 3, 4, 5, 6]


/*
P
//////////////////////////////////////////////////////


E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
idea v1
  - Keep going until you 'go off the edge' or 'hit a cell you've seen before' at which point you should turn right.  Cell 'to the right' has also been seen before? -> Return.

Methods of keeping track of visited cells:
  - `visited` set with string coords (JSON.stringify) O(n) space complexity
  - `visitedRows` set and `visitedColumns` set?  this is more space-efficient but is still still O(n) space complexity?
  - set of integers (assumes all matrix values are unique) ... O(n) space complexity

Keeping track of 'move direction'? 
  - Move direction integer, increment at each turn.  Use modulo to determine if it's a multiple of 4, 3, 2, or 1.
  - Move direction string: 'right', 'down', 'left', 'up'
  - just use an integer (0 thru 4) and a matrix of transformation values.  Increment integer and wrap around to 0

Algo
  - result = []
  - MATRIX_LENGTH = length * width
  - count = 0;
  - coord = [0, 0]
  - direction = 'right'
  - while (count < MATRIX_LENGTH):
    
      // need to turn?  Turn!
      - next = nextCoord(row, col, direction)
      - if visited.has(next) OR outOfBounds(next):
        - direction = turn()
      
      // move!
      - coord = move(row, col, direction)
      - push current value to `result`
      - increment count
  - return result
*/

function spiralTraversal(matrix) {
  const HEIGHT = matrix.length;
  const WIDTH = matrix[0].length;
  const MATRIX_LENGTH = HEIGHT * WIDTH;
  let result = [matrix[0][0]];
  let count = 0;
  let coord = [0, 0];
  let direction = 'right'
  const visited = new Set([JSON.stringify(coord)]);

  const xform = {
    'right': [0, 1],
    'down': [1, 0],
    'left': [0, -1],
    'up': [-1, 0],
  }

  // main loop
  while (count < MATRIX_LENGTH - 1) {
    // console.log("coord=", coord[0], coord[1])
    let next = nextCoord(coord[0], coord[1], direction);
    if (visited.has(JSON.stringify(next)) || outOfBounds(next[0], next[1])) {
      direction = turn(direction);
      next = nextCoord(coord[0], coord[1], direction);
      // console.log("Turned, now facing ", direction)
    }
    coord = next;
    result.push(matrix[coord[0]][coord[1]]);
    visited.add(JSON.stringify(coord))
    // console.log(visited)
    // console.log();
    count++;
  }
  return result;

  // console.log(outOfBounds(1, 1))
  console.log(nextCoord(0, 0, 'right'))

  function turn(currentDirection) {
    switch (currentDirection) {
      case 'right':
        return 'down';
      case 'down':
        return 'left';
      case 'left':
        return 'up'
      case 'up':
        return 'right'
    }
  }

  function nextCoord(row, col, direction) {
    let tRow = xform[direction][0];
    let tCol = xform[direction][1];
    return [row + tRow, col + tCol]
  }

  function outOfBounds(row, col) {
    let result = (row < 0 || row > HEIGHT - 1 || col < 0 || col > WIDTH - 1);
    // console.log(row, col, result? "IS out of bounds" : "NOT out of bounds")
    return result;
  }
}

// LS solution
// SV comments
function spiralTraversal(matrix) {
  const result = [];
  if (!matrix || !matrix[0]) {
    return result;
  }

  // setup variables to track which rows & columns are fully processed
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1;
  const size = matrix.length * matrix[0].length;

  // process each row and column, incrementing the row/column after it's been fully processed
  while (result.length < size) {
    for (let i = left; i <= right && result.length < size; i++) {
      result.push(matrix[top][i]);
    }
    top++;

    for (let i = top; i <= bottom && result.length < size; i++) {
      result.push(matrix[i][right]);
    }
    right--;

    for (let i = right; i >= left && result.length < size; i--) {
      result.push(matrix[bottom][i]);
    }
    bottom--;

    for (let i = bottom; i >= top && result.length < size; i--) {
      result.push(matrix[i][left]);
    }
    left++;
  }
  return result;
}