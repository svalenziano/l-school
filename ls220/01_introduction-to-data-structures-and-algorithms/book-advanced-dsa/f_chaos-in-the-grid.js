// You are given a grid represented as a nested array filled
// with empty strings. Chaos, the puppy, is standing at the
// top-left corner of the grid and can move either down or right
// at any point in time. Determine the number of distinct paths
// Chaos can take to reach a bowl of treats placed at the
// bottom-right corner of the grid.

// Define a function `chaosInTheGrid` that, given a nested
// array, returns the number of unique paths that Chaos
// can take to reach the bottom-right corner.

// The grid will have at least 1 row and 1 column.

// Example:

// Given the following 2x3 grid:

const grid = [
  ["", "", ""],
  ["", "", ""],
];

// There are three distinct path Chaos can take:
// 1. Right -> Right -> Down
// 2. Right -> Down -> Right
// 3. Down -> Right -> Right


// Test cases

const grid1 = [[""]];
const grid2 = [
  ["", ""],
  ["", ""],
];                   
const grid3 = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""],
];
const grid4 = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];
const grid5 = [
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["", "", "", "", "", ""],
];
console.log(chaosInTheGrid(grid1) === 1);
console.log(chaosInTheGrid(grid2) === 2);
console.log(chaosInTheGrid(grid3) === 6);
console.log(chaosInTheGrid(grid4) === 15);
console.log(chaosInTheGrid(grid5) === 252);
// All test cases should log true



// My top-down solution (recursive)
// function chaosInTheGrid(grid) {
//   let cols = grid[0].length;
//   let rows = grid.length;
//   let result = pathsToCoord(cols - 1, rows - 1);
//   // console.log(x, y)
//   // console.log('result', result);
//   return result;

//   function pathsToCoord(x, y) {
//     if (x === 0 || y === 0) return 1;
//     return (
//       pathsToCoord(x - 1, y) + pathsToCoord(x, y - 1)
//     );
//   }
// }

// ls solution
// function chaosInTheGrid(grid) {
//   const rows = grid.length;
//   const cols = grid[0].length;

//   function pathsToCoord(row, col) {
//     if (row === 0 || col === 0) {
//       return 1;
//     }
//     return pathsToCoord(row - 1, col) + pathsToCoord(row, col - 1);
//   }

//   return pathsToCoord(rows - 1, cols - 1);
// }


// SV practice, brute force - works!
// function chaosInTheGrid(grid) {
//   let rows = grid.length;
//   let cols = grid[0].length;
//   return helper(rows - 1, cols - 1);  
  
//   function helper(row, col) {
//     if (row === 0 || col === 0) {
//       return 1;
//     }
//     return helper(row - 1, col) + helper(row, col - 1); 
//   }
// }

// SV practice, cache with array
function chaosInTheGrid(grid) {
  let rows = grid.length;
  let cols = grid[0].length;

  // initialize cache with 1's in 1st row and column
  // There are many ways to do this, BUT...
  // ...Be careful to avoid building the cache with shallow-copied rows!
  let cache = Array(rows).fill().map(() => Array(cols).fill(undefined));
  for (let r = 0; r < rows; r++) {
    cache[r][0] = 1;
  }
  cache[0].fill(1);

  return helper(rows - 1, cols - 1);  
  
  function helper(row, col) {
    if (row === 0 || col === 0) {
      return 1;
    }
    
    // if cache has value for requested row and col
    if (cache[row][col] !== undefined) {
      return cache[row][col];
    }
    // otherwise: calculate, cache, and return
    let result = helper(row - 1, col) + helper(row, col - 1);
    cache[row][col] = result;
    return result;
  }
}


let grid99 = [
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
]

// console.log(chaosInTheGrid(grid99))