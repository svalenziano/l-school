// Given an undirected graph represented by an edge list, determine if
// there is a path between specified source and destination vertices.

// Implement the function `hasPath` that takes three arguments:
// an edge list representing the graph, a source vertex, and a
// destination vertex. The function should return true if a path
// exists between the source and destination, and false otherwise.

// function hasPath(edgeList, src, dst) {
//   // implementation goes here
// }

console.log(hasPath([[1, 2], [2, 3], [3, 4]], 1, 4) === true);
console.log(hasPath([[1, 2], [3, 4]], 1, 4) === false);
console.log(hasPath([[1, 2], [1, 3], [2, 4], [3, 4], [3, 5], [5, 6]], 1, 6) === true);
console.log(hasPath([], 1, 1) === true);
console.log(hasPath([[1, 2], [1, 3], [4, 5], [6, 7]], 2, 5) === false);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [1, 5], [2, 6], [6, 7], [7, 8], [8, 5]], 1, 8) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 3], [2, 7], [7, 8], [8, 7], [7, 9], [9, 10], [10, 11], [11, 12], [12, 10], [7, 13]], 1, 13) === true);
console.log(hasPath([[1, 2], [2, 3], [3, 1], [4, 5], [5, 6], [6, 4], [7, 8], [8, 9], [9, 10], [10, 7], [11, 12], [13, 14], [14, 15], [15, 13]], 1, 12) === false);
// All test cases should log true


/* 
my solve

Algo, high level
  - perform traversal of graph, starting at `source`
  - if `destination` is found, return true

- Let's perform a depth-first traversal, using a stack and a `discovered` set

Algo, low level
  - Convert edge list into an adjacencies list (a Map called `adjList`)
  - create a `discovered` Set, populate with [src]
  - create a stack: an array with one element: src
  - while stack still has elements:
    - current = pop element off stack
    - if `current` matches `dst`, return true
    - for each neighbor (from adjList):
      - if neighbor isn't in `discovered`:
        - push it to the stack
        - add it to `discovered`
  - return false

create adjacencies list from edge list HELPER
  - create new Map to hold adjList
  - for each edge of edgeList
    - add entry for left vertex
      - if left vertex doesn't exist,
        - add entry to adjList map, value = create empty array
      - push right vertex to array
    - add entry for right vertex
      - do the same with the above
*/


function createAdjList(edgeList) {
  const adjList = new Map();

  edgeList.forEach(([vertex1, vertex2]) => {
    if (!adjList.has(vertex1)) adjList.set(vertex1, []);
    adjList.get(vertex1).push(vertex2);

    if (!adjList.has(vertex2)) adjList.set(vertex2, []);
    adjList.get(vertex2).push(vertex1);
  });
  return adjList;
}


function hasPath(edgeList, src, dst) {
  let adjList = createAdjList(edgeList);
  let discovered = new Set([src]);
  let stack = [src];
  while (stack.length > 0) {
    const current = stack.pop();
    if (current === dst) {
      return true;
    }

    for (let neighbor of adjList.get(current)) {
      if (!discovered.has(neighbor)) {
        stack.push(neighbor);
        discovered.add(neighbor);
      }
    }
  }
  return false;
}