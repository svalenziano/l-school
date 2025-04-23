"use strict";
// As a hydrologist, you're studying a unique rectangular island
// situated between the Atlantic Ocean and the Indian Ocean. The
// island's terrain varies in elevation across its surface.
// The island is represented as an m x n grid, where each cell has
// a specific elevation.

// The ocean borders are as follows:

// The Atlantic Ocean borders the island's western and northern coasts.
// The Indian Ocean borders the island's southern and eastern coasts.

// You're given an m x n integer matrix `heights` where `heights[r][c]`
// represents the height above sea level of the cell at coordinate (r, c).
// During the rainy season, water accumulates on the island and
// flows according to these rules:

// Water can flow from a cell to adjacent cells in four directions,
// north, south, east, and west if the adjacent cell's elevation
// is less than or equal to the current cell's elevation.
// Water can flow from any edge cell directly into the bordering ocean.

// Your task is to identify all the locations on the island where accumulated
// rainwater has the potential to eventually reach *both* the Atlantic and
// Indian Oceans, either directly or through connected cells.


// Example 1:

// Input:
// [
//  [1, 2, 1, 3, 6],
//  [2, 2, 3, 4, 4],
//  [2, 3, 5, 2, 1],
//  [9, 8, 1, 3, 5],
//  [5, 1, 2, 2, 3]
// ]

// Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

// Explanation:
// - [0,4] with an elevation of 6 can flow to the Atlantic Ocean (north) and the Indian Ocean (east) directly.
// - [1,3] with an elevation of 4 can flow to the Atlantic via [0,3] (as well as several other paths) and
//   can reach the Indian ocean via [1,4] (as well as several other paths).
// - [1,4] can flow to both oceans in a similar fashion as [1, 3].
// - [2,2] can reach Atlantic Ocean directly to the north or west and the Indian ocean directly to the east.
// - [3,0], [3,1], and [4,0] can flow to the Atlantic to the west and reach the Indian ocean to the south.

// Example 2:

// Input:
// [[1]]

// Output: [[0,0]]

// Explanation: On a single-cell island, water from the sole cell can reach both oceans.



// Helper function for the test cases

function coordinateSetsEqual(set1, set2) {
  if (set1.length !== set2.length) return false;
  const stringSet1 = new Set(set1.map(JSON.stringify));
  return set2.every(coord => stringSet1.has(JSON.stringify(coord)));
}

// // Test Cases:

const grid1 = [
  [1, 2, 1, 3, 6], // 0
  [2, 2, 3, 4, 4], // 1
  [2, 3, 5, 2, 1], // 2  
  [9, 8, 1, 3, 5], // 3 
  [5, 1, 2, 2, 3]  // 4
];
const expected1 = [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]];  // my solve is missing [1,4], [3,0]
console.log(coordinateSetsEqual(waterFlow(grid1), expected1));

// const grid2 = [[1]];
// const expected2 = [[0,0]];
// console.log(coordinateSetsEqual(waterFlow(grid2), expected2));

// const grid3 = [
//   [3, 3, 3, 3, 3],
//   [3, 2, 2, 2, 3],
//   [3, 2, 1, 2, 3],
//   [3, 2, 2, 2, 3],
//   [3, 3, 3, 3, 3]
// ];
// const expected3 = [[0,0],[0,1],[0,2],[0,3],[0,4],[1,0],[1,4],[2,0],[2,4],[3,0],[3,4],[4,0],[4,1],[4,2],[4,3],[4,4]];
// console.log(coordinateSetsEqual(waterFlow(grid3), expected3));

// const grid4 = [
//   [1, 2, 3],
//   [8, 9, 4],
//   [7, 6, 5]
// ];
// const expected4 = [[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]];
// console.log(coordinateSetsEqual(waterFlow(grid4), expected4));

// const grid5 = [
//   [10, 10, 10, 10],
//   [10,  1,  1, 10],
//   [10,  1,  1, 10],
//   [10, 10, 10, 10]
// ];
// const expected5 = [[0,0],[0,1],[0,2],[0,3],[1,0],[1,3],[2,0],[2,3],[3,0],[3,1],[3,2],[3,3]];
// console.log(coordinateSetsEqual(waterFlow(grid5), expected5));
        
        
        
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


*/


// let test = [
//   [1, 2, 1, 3, 6],
//   [2, 2, 3, 4, 4],
//   [2, 3, 5, 2, 1],
//   [9, 8, 1, 3, 5],
//   [5, 1, 2, 2, 3]
// ]
// waterFlow(test)


// my solve
// see obsididan excalidraw for algo design
function waterFlow(heights) {
  let atlanticPoints = new Set();
  let indianPoints = new Set();
  const LAST_ROW = heights.length - 1;
  const LAST_COL = heights[0].length - 1;


  let coordString = (row, col) => JSON.stringify([row, col])  // (row, col) => `${row}, ${col}`;
  let atlanticAdjacent = (row, col) => col === 0 || row === 0;
  let indianAdjacent = (row, col) => row === LAST_ROW || col === LAST_COL;
  // console.log('neighbors:', getFlowableNeighbors(1, 3))

  // Explore the grid
  for (let row=0; row <= LAST_ROW; row++) {
    for (let col=0; col <= LAST_COL; col++) {
      backtrack(row, col);
    }
  }

  // Create list of points that flow into both
  let result = [];
  for (let c of atlanticPoints) {
    if (indianPoints.has(c)) {
      let [row, col] = JSON.parse(c);
      result.push([row, col])
    }
  }

  console.log('ATLANTIC:', atlanticPoints)
  console.log('INDIAN:', indianPoints)
  console.log('RESULT:', result)

  return result;

  function backtrack(startRow, startCol, row=startRow, col=startCol, visited=new Set()) {
    // success criteria
    let success = false;
    if (atlanticAdjacent(row, col)) {
      atlanticPoints.add(coordString(startRow, startCol));
      success = true;
    }
    if (indianAdjacent(row, col)) {
      indianPoints.add(coordString(startRow, startCol));
      success = true;
    }
    if (success) {
      return;
    }
    
    // Iteration
    // Dead end / Pruning
    let neighbors = getFlowableNeighbors(row, col)
      .filter((coord) => !visited.has(coordString(coord[0], coord[1])))

    // Explore
    for (let neighbor of neighbors) {
        // setup
        let nRow = neighbor[0];
        let nCol = neighbor[1];
        visited.add(coordString(nRow, nCol));
        // explore
        backtrack(startRow, startCol, nRow, nCol, visited);
        // cleanup
        visited.delete(coordString(nRow, nCol))
      }
    }

  function getFlowableNeighbors(row, col) {
    // Input = integers = row and column coordinates
    // Return = nested array of ints = filtered row and column coords.  Only points that are equal or lower in height
    // No validation! Assumes that (x, y) isn't at the edge of the matrix

    // Algo:
    /* 
    - Create list of neighboring coords
    - Filter that list: height at coord must be lower than `current` height
    */

    
    // list of neighboring coords:
    let north = [row - 1, col    ];
    let south = [row + 1, col    ];
    let east =  [row,     col + 1];
    let west =  [row,     col - 1];

    let currentHeight = heights[row][col];
    let flowableNeighbors = [north, south, east, west]
      .filter((coords) => currentHeight >= heights[coords[0]][coords[1]]);

    return flowableNeighbors;
  }
}
