// Implement a function `dfs` that accepts two arguments: the adjacency list
// representing a directed acyclic graph and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// Implement a solution using a stack, this time.

// function dfs(adjList, source) {
  // implementation goes here
  // source = source node
// }

const adjList = new Map();
adjList.set(1, []);
adjList.set(2, [1, 3, 4]);
adjList.set(3, [5]);
adjList.set(4, [6]);
adjList.set(5, []);
adjList.set(6, []);
adjList.set(7, [6]);

dfs(adjList, 2); // 2, 4, 6, 3, 5, 1 or 2, 1, 3, 5, 4, 6

// Note that the output can vary based on the order in
// which you process neighbors. These two outputs are
// the most likely, but other valid orders exist.



/*
My solve

- The graph is represented by an adjacency list.
- The only nodes we'll be able to access are those that are accessible via the source node

- algo v1
  - stack = []
  - starting from the source node...
  - handleNeighbors(vertex) HELPER
    - for each element in the vertex's adjacency list:
      - print the value to console
      - push element onto stack
  - while stack is not empty:
    - pop the first vertex off the stack, 
    - handleNeighbors(vertex)

- ls algo (simpler and better)
  - stack = []
  - add first vertext to the stack
  - while stack isn't empty:
    - pop element off stack and print it
    - push any neighbors of the popped element onto the stack
*/

// my DFS ITERATIVE solution
// very similar to LS's solution
function dfs(adjList, source) {
  const stack = [source];
  
  while (stack.length > 0) {
    let vertex = stack.pop();
    console.log(vertex)
    for (let neighbor of adjList.get(vertex)) {
      stack.push(neighbor);
    }
  }
}

// my DFS RECURSIVE solution
/* 
Tree traversal NLR recursion?  
  - return if null
  - process node
  - recurse left
  - recurse right

Order => preorder (NLR)
Base case = adjacency list is exhausted
Recursive definition: The graph (adjacency list) is processed by processing the vertex, and then processing each neighbor vertex.

Algo:
  - process the vertex
  - if the vertex has neighbors: (handles the base case)
    - for each neighbor, process the neighbor
*/

function dfs(adjList, source) {
  traverse(source);

  function traverse(vertex) {
    console.log(vertex);
    if (adjList.get(vertex)) {
      for (let neighbor of adjList.get(vertex)) {
        traverse(neighbor);
      }
    }
  }
}

// LS: simpler solution!
//  No need for helper function!
// default return value of `Map.proto.get` provides safe handling of the base case without hand-coded logic
function dfs(adjList, source, visited = new Set()) {
  console.log(source);
  visited.add(source);

  let neighbors = adjList.get(source);
  for (let neighbor of neighbors) {
    if (!visited.has(neighbor)) {
      dfs(adjList, neighbor, visited);
    }
  }
}


// my attempt 2025-04-22 - FAIL!
// Never adds `source` to `visited`!

/*
SV SCRATCH
- neighbors = get neighbors from adjacencies list
- for each neighbor:
  - If the neighbor isn't in `visited`:
    - Add the neighbor to `visited`
    - Do stuff (now's your chance to process the vertex)
    - traverse neighbor (recursive call)
*/
// function dfs(adjList, source, visited=new Set()) {
//   neighbors = adjList.get(source);
//   for (let n of neighbors) {
//     if (!visited.has(n)) {
//       visited.add(n);
//       console.log(source)  // do stuff to vertex
//       dfs(adjList, n, visited);
//     }
//   }
// }


// my attempt 2025-04-23
function dfs(adjList, source, visited = new Set([source])) {
  console.log(source);

  for (let neighbor of adjList.get(source)) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);
      dfs(adjList, neighbor, visited);
    }
  }
}