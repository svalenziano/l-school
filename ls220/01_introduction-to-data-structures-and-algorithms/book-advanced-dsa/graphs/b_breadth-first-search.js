// Implement a function `bfs` that accepts two arguments: the adjacency list
// representing an acyclic graph and a starting vertex (source).
// The function should print the vertices in breadth-first
// traversal order.

// function bfs(adjList, source) {
//   // implementation goes here
// }

const adjList = new Map();
adjList.set(1, []);
adjList.set(2, [1, 3, 4]);
adjList.set(3, [5]);
adjList.set(4, [6]);
adjList.set(5, []);
adjList.set(6, []);
adjList.set(7, [6]);

bfs(adjList, 2); // 2, 1, 3, 4, 5, 6  or 2, 4, 3, 1, 6, 5

// Again, the order depends on which neighbor node we explore first


/* 
my solve

Algo v1
  - queue = [current vertex]
  - while the queue isn't empty
    - dequeue a vertex (pop)
    - for each neighbor of the current vertex:
    - enqueue the vertex's neighbors (shift)


*/
function bfs(adjList, source) {
  let queue = [source];
  while (queue.length > 0) {
    let vertex = queue.pop();
    // process the vertex
    console.log(vertex);
    // enqueue the vertex's neighbors
    for (let neighbor of adjList.get(vertex)) {
      queue.unshift(neighbor);
    }
  }
}