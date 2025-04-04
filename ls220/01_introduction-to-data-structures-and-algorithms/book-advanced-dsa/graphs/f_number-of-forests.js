"use strict";
// You are provided with a 2D grid map where each cell is either
//  marked as a tree ('T') or open land ('O'). Your goal is to
// count the number of distinct forest regions on the map. A forest
// region consists of a contiguous group of tree cells ('T'). For
// this problem, two tree cells are considered connected if they
// share an edge horizontally or vertically, but not diagonally.

// Write a function numOfForests that accepts a nested array grid
// representing the 2D map. The function should return the total
// number of forest regions in the grid.

// function numOfForests(grid) {
//   // implementation goes here
// }

const grid1 = [];
console.log(numOfForests(grid1) === 0);

const grid2 = [
  ['O', 'O', 'O'],
  ['O', 'O', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid2) === 0);

const grid3 = [
  ['T', 'T', 'O'],
  ['T', 'T', 'O'],
  ['O', 'O', 'O']
];
console.log(numOfForests(grid3) === 1);

const grid4 = [
  ['O', 'O', 'T', 'T', 'O'],
  ['T', 'T', 'O', 'T', 'O'],
  ['T', 'T', 'O', 'O', 'O'],
  ['O', 'O', 'O', 'T', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
];
console.log(numOfForests(grid4) === 3);

const grid5 = [
  ['T', 'T', 'T'],
  ['T', 'O', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid5) === 1);

const grid6 = [
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T'],
  ['O', 'O', 'O', 'O', 'O'],
  ['T', 'O', 'T', 'O', 'T']
];
console.log(numOfForests(grid6) === 9);

const grid7 = [
  ['T', 'T', 'T'],
  ['T', 'T', 'T'],
  ['T', 'T', 'T']
];
console.log(numOfForests(grid7) === 1);

// All test cases should log true


/* 
MY SOLVE

P
  INPUT = array of characters (strings)
  RETURN = count of distinct 'forest regions'

  RULES
    - EXPLICIT
      - forest = contiguous group of tree cells 'T'
      - contiguous forest = two cells are contiguous if they share the same row AND the column is off by one (horizontally contiguous) OR they share the same column AND the row is off by one (vertically contiguous).
      - diagonals are not considered continugous (off by one in both row and column)
    - IMPLICIT
      - empty array => 0 forests
      - minimum forest size = 1 cell
E

D
  graph
A
  v1 algo high level
    - create an adjacencies list (adjList):
      - scan each element in the array for horizontal and vertical adjacencies
    - for each adjacency:
      - increment forestCount
      - explore the entire adjacency, removing adjacencies from the adjList as you go
    - return forestCount

  v1 algo low level
    - create empty adjList (a new Map object)
    // scan for horizontal connections:
    - for each element in the array
      - if the element and the element to the right are 'T'
        - add both elements to the adjList
    // scan for vertical connections:
    - ...
    // Now we have adjList with all horiz and vert adjacencies

    const grid3 = [
    ['T', 'T', 'O'],
    ['T', 'T', 'O'],
    ['O', 'O', 'O']
    ];

    grid3 adjList = 0 => [1, 3]  (use integers to represent grid positions)
                    1 => [0, 4]
                    3 => [0, 4]
                    4 => [1, 3]
    - initialize a counter at 0
    - while adjList is not empty (adjList.size > 0)
      - pop the first vertex
      - count +1
      - traverse that graph and remove the 'forest' connected to the vertex
        - process: remove adjList entry for each vertex
        - once the traversal is complete, you've removed all entries for that 'forest'
    - return the count

  v2 algo (LS)
    - explore each row, row by row, left to right
    - discovered = new Set()
    - when a tree is encounted (that hasn't been seen before), explore the forest completely (using graph traversal), adding each tree to `discovered`
      - increment `forestsCount` +1 
    - continue exploring

  v2 algo - low level
    - use strings for cell coordinates: "0,1", "0,2" and so on.
    - discovered = new Set() 
    - forestCount = 1
    - explore each row, row by row, left to right
    - when a tree is encounted (that hasn't been seen before):
      - (shouldn't be necessary if my traversal is thorough!) ... new = true // keep track of if it's a new forest or not
      - explore the forest completely (using DFS graph traversal), adding each tree to `discovered`
        - if a tree is adjacent and it hasn't been `discovered`:
          - add it to `discovered`
        - if a tree has already been discovered:
          - abort the traverse? (return)
          - set `new` to false to indicate that this forest has already been explored
      - (shouldn't be necessary if my traversal is thorough!) ... if you fully explore the forest and `new` is still true, then increment `forestsCount` +1 
    - continue exploring 

  v3 algo - low level
    - use strings for cell coordinates: "0,1", "0,2" and so on.
    - discovered = new Set() 
    - forestCount = 0
    - explore each cell: row by row, left to right
    - when a tree is encounted:
      - if tree is not in `discovered` (only process undiscovered trees):
        - increment the count
        - fully traverse the forest (DFS - HELPER) (args: row, col, discovered set):
          - base case (implemented below) = all adjacent trees have already been `discovered`
          - for each adjacent tree (up, right, down, and left):
            - if the tree has been previously `discovered`: (even though we already performed a `discovered` check earlier, this check is necessary to avoid duplication of efforts during exploration)
              - continue (stop searching) (base case)
            - else:
              - add the tree (the cell) to `discovered`
              - enqueue the tree (the cell)
    - continue exploring 
*/

function numOfForests(grid) {
  if (!grid || grid.length === 0) return 0;
  
  const discovered = new Set();
  let forestCount = 0;
  const numRows = grid.length;
  const numCols = grid[0].length;

  // Make string to store x & y grid coordinates
  let makeCoordStr = (row, col) => `${row},${col}`

  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === 'T' && 
          !discovered.has(makeCoordStr(row, col))) {
        forestCount++;
        exploreForest(row, col);
      }
    }
  }
  return forestCount;

  function exploreForest(row, col) {
    // This function explores the forest and notes trees as discovered
    // to prevent the trees from being counted in the future 
    let stack = [[row, col]];
    let transformations = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    while (stack.length > 0) {
      let [row, col] = stack.pop();
      for (let [x, y] of transformations) {
        let newRow = row + x;
        let newCol = col + y;
        // SKIP, if coords are invalid or if the coord is already processed
        if (newRow < 0 || newCol < 0 ||
            newRow >= numRows || newCol >= numCols ||
            discovered.has(makeCoordStr(newRow, newCol))) continue;
        // Otherwise, record the location in `discovered`
        if (grid[newRow][newCol] === 'T') {
          discovered.add(makeCoordStr(newRow, newCol));
          stack.push([newRow, newCol])
        }
      }
    }
  }
}