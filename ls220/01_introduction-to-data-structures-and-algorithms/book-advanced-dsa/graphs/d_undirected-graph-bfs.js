// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an undirected graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

// function bfs(adjList, source) {
//   // implementation goes here
// }

const adjList = new Map();
adjList.set(1, [2, 3]);
adjList.set(2, [1, 4]);
adjList.set(3, [1, 4, 5]);
adjList.set(4, [2, 3]);
adjList.set(5, [3, 6]);
adjList.set(6, [5]);

console.log(bfs(adjList, 1)); // 1, 2, 3, 4, 5, 6 or 1, 3, 2, 5, 4, 6


/* 
my solve

- breadth-first uses a queue to keep track of the levels
- dequeue the current level and enqueue the new level

Algo
  - currentLevel = [source];
  - visited = new Set();
  - while `currentLevel` is not empty:
    - currentVertices = dequeue all vertices from currentLevel
    - for each vertex in currentVertices:
      - add vertex to visited
      - process the vertex (print value)
      - for each neighbor of vertex (using adjList.get(vertex)):
        - if the neighbor is not in visited:
          - enqueue the neighbor in `currentLevel`
*/

function bfs(adjList, source) {
  let currentLevel = [source];
  const visited = new Set([source]);

  while (currentLevel.length > 0) {
    
    // dump currentLevel to new array so that currentLevel can be re-populated
    const vertices = [...currentLevel];
    currentLevel = [];

    // iterate through the current level of vertices
    for (let vertex of vertices) {
      console.log(vertex);
      for (let neighbor of adjList.get(vertex)) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor)
          currentLevel.push(neighbor);
        }
      }
    }
  }
}