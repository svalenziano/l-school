"use strict";
// You're a botanist studying the spread of a peculiar wilting
// condition in a rose garden. The garden is represented as a
// grid where each cell can have one of three states:

// - 0 representing an empty plot,
// - 1 representing a healthy rose, or
// - 2 representing a wilted rose.

// Every day, any healthy rose that is adjacent (up, down, left,
// or right) to a wilted rose begins to wilt.
// Your task is to determine the minimum number of days it takes
// for all roses in the garden to wilt. If it's impossible for
// all roses to wilt, return -1.

// Example 1:

// Input:
// [
//   [2,1,1],
//   [1,1,0],
//   [0,1,1]
// ]

// Output: 4

// Explanation:
// Day 1: Roses at (0, 1) and (1, 0) will wilt.
// Day 2: Roses at (0, 2) and (1, 1) will wilt.
// Day 3: The rose at (2, 1) will wilt.
// Day 4: The final rose at (2, 2) will wilt.

// Example 2:

// Input:
// [
//   [2,1,1],
//   [0,1,1],
//   [1,0,1]
// ]

// Output: -1

// Explanation: The rose in the bottom left corner (2, 0)
// will never wilt because it's not adjacent to any
// other roses.


// Test Cases:

console.log(wiltedRoses([[2,1,1],[1,1,0],[0,1,1]]) === 4);
console.log(wiltedRoses([[2,1,1],[0,1,1],[1,0,1]]) === -1);
console.log(wiltedRoses([[0,2]]) === 0);
console.log(wiltedRoses([[1,1,1],[1,2,1],[1,1,1]]) === 2);
console.log(wiltedRoses([[2,2],[1,1],[0,0]]) === 1);
console.log(wiltedRoses([[1,1,1],[1,1,1],[1,1,1]]) === -1);
console.log(wiltedRoses([[2]]) === 0);
console.log(wiltedRoses([[1]]) === -1);
console.log(wiltedRoses([]) === -1);
console.log(wiltedRoses([[0,0,0],[0,1,0],[0,0,2]]) === -1);
console.log(wiltedRoses([[2,1,1],[1,1,1],[0,1,2]]) === 2);
        
        
// SV SOLUTION
// NOT PRETTY BUT IT WORKS!!!        
/*
P
//////////////////////////////////////////////////////
  PROBLEM = given a matrix of roses, how many days will it take for all roses to wilt?
  INPUT = matrix of integers representing empty land and roses
  RETURN = integer. -1 means at least one rose will never wilt.  Otherwise, the integer represents the number of days that it will take for ALL roses to wilt.


  Rules:
    - Each day, ALL roses that are adjacent to a wilted rose will wilt
    - Adjacent = up, down, left or right
    - Some healthy roses may be 'safe' - they will never wilt because they are 'inaccessible' by wilted roses

E
//////////////////////////////////////////////////////

[2,1,1],
[1,1,0],
[0,1,1]
// Output: 4  (remember that wilting can't travel diagonally!)


My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
v1 IDEA:
  "While there are still 'wiltable' roses, wilt every wiltable rose and increment a `days` counter.  When you've run out of 'wiltable' roses, if there are any healthy roses left, return -1.  Otherwise, return the number of `days` that it took."

v1 algo ITERATIVE:
- wiltNext = [] (queue of [row, col] array objects that represent coordinates)
- make Set of `visited` -> prevents duplicates from being added to queue
- make Set of `healthy`
- Scan the entire grid:
  - add wilted to wiltNext
  - DON'T add to `wilted` set, would screw up the next step
  - add to `healthy`
- while queue has elements:
  - wilt one level of roses:
    - get length of queue
    - for each index of this level (btw 0 and length):
      - remove vertex from `healthy`
      - add wiltable neighbors to wiltNext queue
  - increment 'day' counter'
- if a single healthy rose still exists (size of `healthy` is > 0):
  - return -1
- else:
  - return the value of the counter

[2,1,1],
[1,1,0],
[0,1,1]

enqueueWiltable HELPER
Goal: get coords of wiltable neighbors so they can be added to the queue
Wiltable neighbors = healthy plants (=== 1) to the north, east, south, or west of the current plant that are NOT in `visited`
IDEA: for each neighboring coord, if that coord is not in `visited`, and the plant is healthy, enqueue the coordinates
- 

*/

function wiltedRoses(garden) {
  if (garden.length === 0) return -1;
  
  let daysCounter = -1;
  let wiltNext = []; // queue
  let visited = new Set();
  let healthy = new Set();
  let encode = (row, col) => JSON.stringify([row, col]);
  let decode = (string) => JSON.parse(string)
  const ROWS = garden.length;
  const COLUMNS = garden[0].length;
  const EMPTY = 0;
  const HEALTHY = 1;
  const WILTED = 2;
  

  // do full scan of garden to generate starting conditions
  for (let row = 0; row < ROWS; row++) {
    for (let col = 0; col < COLUMNS; col++) {
      let plant = garden[row][col];
      if (plant === WILTED) {
        wiltNext.push(encode(row, col));
        visited.add(encode(row, col))
      }
      if (plant === HEALTHY) healthy.add(encode(row, col));
    }
  }

  // wilt one level of roses at a time
  while (wiltNext.length > 0) {
    let levelSize = wiltNext.length;
    for (let i = 0; i < levelSize; i++) {
      // wilting happens by dequeuing each vertex and updating 'healthy'
      let [row, col] = decode(wiltNext.shift());
      healthy.delete(encode(row, col));

      let healthyNeighbors = getHealthyNeighbors(row, col)
      healthyNeighbors.forEach((encodedCoordinate) => {
        wiltNext.push(encodedCoordinate);
        visited.add(encodedCoordinate)
      })
    }
    daysCounter += 1;
  }

  // return final result
  if (healthy.size > 0) {
    return -1;
  }
  return daysCounter;

  function getHealthyNeighbors(row, col) {
    // return nested array of rows and columns that are wiltable
    const result = [];
    const NEIGHBORS = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1],
    ]
    for (let [tRow, tCol] of NEIGHBORS) {
      if (row + tRow < 0 || col + tCol < 0 || row + tRow > ROWS - 1 || col + tCol > COLUMNS - 1) {
        continue;
      }
      const neighborValue = garden[row + tRow][col + tCol]
      const neighborCoords = encode(row + tRow, col + tCol)
      if (neighborValue === HEALTHY && !visited.has(neighborCoords)) {
        // result.push(neighborCoords)
        wiltNext.push(neighborCoords)
        visited.add(neighborCoords)
      }
    }
    return result;
  }

}


// LS SOLUTION
function wiltedRoses(garden) {
  const rows = garden.length;
  if (rows === 0) {
    return -1;
  }

  const cols = garden[0].length;

  let healthyRoses = 0;
  let queue = [];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (garden[r][c] === 2) {
        queue.push([r, c]);
      } else if (garden[r][c] === 1) {
          healthyRoses++;
      }
    }
  }

  let days = 0;

  while (queue.length > 0 && healthyRoses > 0) {
    let currentWiltedCount = queue.length;
    for (let i = 0; i < currentWiltedCount; i++) {
      const [x, y] = queue.shift();
      for (const [dx, dy] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
        const xx = x + dx;
        const yy = y + dy;
        if (xx < 0 || xx >= rows || yy < 0 || yy >= cols) {
          continue;
        }
        if (garden[xx][yy] === 0 || garden[xx][yy] === 2) {
          continue;
        }
        garden[xx][yy] = 2;
        healthyRoses--;
        queue.push([xx, yy]);
      }
    }
    days++;
  }
  return healthyRoses > 0 ? -1 : days;
}