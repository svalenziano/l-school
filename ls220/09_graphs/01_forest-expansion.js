// You are provided with a 2D grid map where each cell
// is either marked as a tree ('T') or open land ('O').
// Your goal is to transform specific regions of open land into trees.
// An open land region consists of open land cells that are
// connected horizontally or vertically.

// Any region of open land that is completely surrounded by trees
// on all four sides should be converted into a tree area by changing
// its designation to 'T'.

// The transformation rules are as follows:
// - If an open land cell ('O') is connected to other open land cells
//   horizontally or vertically, they form an open land region.
// - If an entire open land region is completely surrounded by tree
//   cells ('T') on all four sides (up, down, left, and right), then
//   all cells in this region should be changed to tree cells ('T').
// - Open land regions that are not completely surrounded by trees will remain unchanged.

// Implement a function `forestExpansion` that
// accepts a nested array grid representing the 2D map.
// The function should return the same grid, modified
// so that all open land regions surrounded by trees
// on all four sides are converted to trees.

// Example 1:

// Input:
// [
// ['T', 'T', 'O'],
// ['T', 'O', 'T'],
// ['T', 'T', 'T']
// ]

// Output:
// [
// ['T', 'T', 'O'],
// ['T', 'T', 'T'],
// ['T', 'T', 'T']
// ]

// Explanation:
// There are two distinct open land regions - cell (0, 2) and cell (1, 1).
// The region made up of cell (1, 1) is completely surrounded by trees,
// horizontally and vertically, so it's converted to a tree.


// Example 2:

// Input:
// [
// ['T', 'O', 'T'],
// ['O', 'O', 'O'],
// ['T', 'O', 'T']
// ]

// Output:
// [
// ['T', 'O', 'T'],
// ['O', 'O', 'O'],
// ['T', 'O', 'T']
// ]

// Explanation:
// There is only one open land region in this case made up of
// cells (0, 1), (1, 0), (1, 1), (1, 2), and (2, 1).
// This region is not fully surrounded by trees, so it remains unchanged.


// Helper function for the test cases
function gridsAreEqual(grid1, grid2) {
  if (grid1.length !== grid2.length) return false;

  return grid1.every((row, i) => row.length === grid2[i].length && row.every((cell, j) => cell === grid2[i][j]));
}

// Test Cases:

const grid1 = [
['T', 'T', 'O'],
['T', 'O', 'T'],
['T', 'T', 'T']
]
const expected1 = [
['T', 'T', 'O'],
['T', 'T', 'T'],
['T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid1), expected1));

const grid2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];
const expected2 = [
['T', 'O', 'T'],
['O', 'O', 'O'],
['T', 'O', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid2), expected2));

const grid3 = [
['T', 'T', 'T', 'T'],
['T', 'O', 'T', 'T'],
['T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T']
];
const expected3 = [
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T']
];

console.log(gridsAreEqual(forestExpansion(grid3), expected3));

const grid4 = [
['O', 'T', 'O', 'T'],
['T', 'O', 'T', 'O'],
['O', 'T', 'O', 'O']
];
const expected4 = [
['O', 'T', 'O', 'T'],
['T', 'T', 'T', 'O'],
['O', 'T', 'O', 'O']
];

console.log(gridsAreEqual(forestExpansion(grid4), expected4));

const grid5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'O', 'T', 'O', 'T'],
['T', 'O', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];
const expected5 = [
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'O', 'T'],
['T', 'T', 'T', 'T', 'T'],
['T', 'T', 'T', 'T', 'T'],
];

console.log(gridsAreEqual(forestExpansion(grid5), expected5));
        
        
        
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
DFS:
  - process the vertex
  - add vertex to `visited`
  - make list of neighbors (the nodes to the top & bottom, left & right)
  - for each neighbor:
    - if neighbor not in visited
      - recursive call

v1 high level:
- Explore the grid, one cell at a time
  - If an 'O' is found, and that cell hasn't yet been visited, explore that open area using a DFS recursive call, updating `visited` as you go (x, y, currentArea=[], reforest=True)
  - recursively explore, starting from the current cell
    - add current to `visited` and `currentArea`
    - BASE CASE:
      - if a 'T' is found, return (stop exploring this direction)
    - if an 'O' is found at the edge of the grid (use current coord to determine), reforest=False
      - 
    - Generate list of neighbors (x, y)
    - for each neighbor
      - recursively explore, passing in currentArea
  - Done exploring the open area? If you need to reforest, execute reforestation

v1 low level (ABORTED):
  - visited = new Map() -> holds coords for all previously visited open regions
  - currentArea = new Map() -> holds coords for current open region
  - for each cell of the grid:
    - if an `O` is found:
      - conduct DFS:
        - if visited or `T`, return (doing nothing)
        - explore up, down, left, right
        - as you go, add coord to `currentArea` and `visited`
        - if 

*/

// LS TESTS


// my solve WIP (not finished, realized I was probs overcomplicating things)
function forestExpansion(grid) {
  let visited = new Set();
  let coordString = (x, y) => `${x}, ${y}`
  let isOnEdge = (x, y) => [x, y].includes(0) || y === grid.length || x === grid[0].length

  for (let row=0; row < grid.length; row++) {
    for (let col=0; col < grid[0].length; col++) {
      let current = grid[row][col];
      if (current === 'O' && !visited.has(coordString(row, col))) {
        convertCurrent = true;
        dfs(row, col);
      }
    }
  }

  function dfs(x, y, currentArea=[], reforest=True) {
    if (isOnEdge(x, y)) {
      convertCurrent = false;
    }
  }
}

// LS solution
// comments are by SV
function forestExpansion(grid) {
  const numRows = grid.length;
  const numCols = grid[0].length;

  function dfs(row, col) {
    // dead-ends / Base cases
    if (
      row < 0 ||
      col < 0 ||
      row >= numRows ||
      col >= numCols ||
      grid[row][col] !== "O"
    ) {
      return;
    }

    // Mark with `v` for visited to indicate that the open region should NOT be converted
    // If we were instead using a set to track 'visited' cells, we'd do that here
    grid[row][col] = "V";
    
    // Recursively DFS into neighboring cells
    dfs(row, col - 1);
    dfs(row - 1, col);
    dfs(row, col + 1);
    dfs(row + 1, col);
  }

  // Search the top and bottom rows for 'O', conduct DFS if found
  for (let col = 0; col < numCols; col++) {
    if (grid[0][col] === "O") {
      dfs(0, col);
    }
    if (grid[numRows - 1][col] === "O") {
      dfs(numRows - 1, col);
    }
  }

  // Search left and right columns for 'O', conduct DFS if found
  for (let row = 0; row < numRows; row++) {
    if (grid[row][0] === "O") {
      dfs(row, 0);
    }
    if (grid[row][numCols - 1] === "O") {
      dfs(row, numCols - 1);
    }
  }

  // Iterate through the entire grid, converting O -> T and V -> O
  for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
      if (grid[row][col] === "O") {
        grid[row][col] = "T";
      }
      if (grid[row][col] === "V") {
        grid[row][col] = "O";
      }
    }
  }

  return grid;
}


// Nathan's solution
// Similar to the direction I was exploring (but aborted)
function forestExpansion(grid) {
  const TREE = "T";
  const OPEN = "O";

  const toKey = (row, col) => `${row},${col}`;
  const fromKey = (key) => key.split(",").map(Number);

  const isBorder = (row, col) => {
    return (
      [row, col].includes(0) ||
      row === grid.length - 1 ||
      col === grid[0].length - 1
    );
  };

  function dfs(row, col, visited) {
    if (grid[row]?.[col] !== OPEN || visited.has(toKey(row, col))) {
      //handles out of bounds
      return;
    }

    visited.add(toKey(row, col));
    if (isBorder(row, col)) transform = false;

    for (let delta = -1; delta <= 1; delta += 2) {
      dfs(row + delta, col, visited);
      dfs(row, col + delta, visited);
    }
  }

  const dontTransform = new Set();
  let transform;

  for (let row = 0; row < grid.length; row++) {
    for (let col = 0; col < grid[0].length; col++) {
      if (grid[row][col] === TREE || dontTransform.has(toKey(row, col))) {
        continue;
      }

      const region = new Set();

      transform = true;
      dfs(row, col, region);

      if (transform) {
        region.forEach((key) => {
          const [row, col] = fromKey(key);
          grid[row][col] = TREE;
        });
      } else {
        region.forEach((key) => dontTransform.add(key));
      }
    }
  }

  return grid;
}