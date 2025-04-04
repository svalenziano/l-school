// You are provided with an 'm x n' 2D grid map where each cell
// is either marked as a tree ('T') or open land ('O'). Your task
//  is to find the largest contiguous forest area on the map. A 
// forest area consists of a group of tree cells ('T') connected
// 4-directionally (horizontally or vertically, but not diagonally).

// Write a function largestForestArea that accepts a nested
// array grid representing the 2D map. The function should
// return the size of the largest forest area, which is the
// number of contiguous 'T' cells in the largest forest.
// If there are no trees in the grid, return 0.

// Example:
// Input:
// [
//   ['O', 'T', 'O', 'O'],
//   ['T', 'T', 'O', 'T'],
//   ['O', 'O', 'O', 'T'],
//   ['O', 'O', 'T', 'T']
// ]
// Output: 4 (The largest forest area has 4 connected tree cells)

function largestForestArea(grid) {
    // Implementation goes here
}

// Test cases
const grid1 = [];
console.log(largestForestArea(grid1) === 0);

const grid2 = [
    ['O', 'O', 'O'],
    ['O', 'O', 'O'],
    ['O', 'O', 'O']
];
console.log(largestForestArea(grid2) === 0);

const grid3 = [
    ['T', 'T', 'O'],
    ['T', 'T', 'O'],
    ['O', 'O', 'O']
];
console.log(largestForestArea(grid3) === 4);

const grid4 = [
    ['O', 'O', 'T', 'T', 'O'],
    ['T', 'T', 'O', 'T', 'O'],
    ['T', 'T', 'O', 'O', 'O'],
    ['O', 'O', 'O', 'T', 'T'],
    ['O', 'O', 'O', 'O', 'O'],
];
console.log(largestForestArea(grid4) === 4);

const grid5 = [
    ['T', 'T', 'T'],
    ['T', 'O', 'T'],
    ['T', 'T', 'T']
];
console.log(largestForestArea(grid5) === 8);

const grid6 = [
    ['T', 'O', 'T', 'O', 'T'],
    ['O', 'O', 'O', 'O', 'O'],
    ['T', 'O', 'T', 'O', 'T'],
    ['O', 'O', 'O', 'O', 'O'],
    ['T', 'O', 'T', 'O', 'T']
];
console.log(largestForestArea(grid6) === 1);

const grid7 = [
    ['T', 'T', 'T'],
    ['T', 'T', 'T'],
    ['T', 'T', 'T']
];
console.log(largestForestArea(grid7) === 9);

const grid8 = [
    ['O', 'T', 'O', 'T', 'T'],
    ['O', 'T', 'O', 'O', 'O'],
    ['O', 'O', 'T', 'O', 'O'],
    ['O', 'O', 'T', 'T', 'T'],
    ['T', 'O', 'T', 'T', 'T']
];
console.log(largestForestArea(grid8) === 7);

const grid9 = [
    ['T', 'O', 'T', 'T'],
    ['O', 'T', 'O', 'T'],
    ['T', 'T', 'O', 'O'],
    ['O', 'T', 'T', 'T']
];
console.log(largestForestArea(grid9) === 6);

const grid10 = [
    ['O', 'T', 'O', 'O'],
    ['T', 'T', 'O', 'T'],
    ['O', 'O', 'O', 'T'],
    ['O', 'O', 'T', 'T']
];
console.log(largestForestArea(grid10) === 4);

const grid11 = [
    ['O', 'T', 'T', 'T', 'O'],
    ['T', 'T', 'O', 'T', 'T'],
    ['O', 'O', 'O', 'O', 'O'],
    ['T', 'T', 'O', 'T', 'O'],
    ['T', 'T', 'O', 'T', 'T']
];
console.log(largestForestArea(grid11) === 7);

// All test cases should log true


/* 
MY SOLVE

DS
  - maxCount = 0
  - graph traversal
    - while traversing, 
      - generate count
      - update maxCount if it's greater than current Max
  - dfs recursive traverse (HELPER)
    - base case = no more contiguous trees: return  


*/