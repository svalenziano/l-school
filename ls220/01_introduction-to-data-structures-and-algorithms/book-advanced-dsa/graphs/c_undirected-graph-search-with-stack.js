// Implement a function `dfs` that accepts two arguments: an adjacency
// list representing an undirected graph, and a starting vertex (source).
// The function should print the vertices in preorder depth-first
// traversal order.

// Use a 'stack' data strcuture and a `visited` set.

function dfs(adjList, source) {
  // implementation goes here
}

const adjList = new Map();
adjList.set(1, [2]);
adjList.set(2, [1, 3]);
adjList.set(3, [2]);

dfs(adjList, 1); // 1, 2, 3

/* 

My solve
- stack = [source]
- visited = new set()
- while stack is not empty:
  - current = pop element off stack
  - add current to `visited`
  - process the current element (print it)
  - Stack the neighbors: for each neighbor of the current element, aka adjList(current)
    - if neighbor not in visited
    - push neighbor to stack 

*/

// my Stack solution
// pretty much identical to LS solution
function dfs(adjList, source) {
  const stack = [source];
  const visited = new Set([source]);  // 👈 note the initialization of the set!

  while (stack.length > 0) {
    const current = stack.pop();  
    console.log(current);

    for (let neighbor of adjList.get(current)) {
      if (!visited.has(neighbor)) {
        // adding neighbor to `visited` before it's actually visited prevents errors
        visited.add(neighbor)  
        stack.push(neighbor);
      }
    }
  }
}