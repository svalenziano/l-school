// Given the root node of a binary tree, implement a
// function `bfs` that returns an array containing the
// values of the nodes visited in level order
// (or breadth-first-search) traversal.

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];

  const val = arr.shift();
  const root = new Node(val);
  nodes.push(root);

  while (arr.length > 0) {
    const curr = nodes.shift();

    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }

    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }

  return root;
}

// Test cases
const tree1 = buildTree([1, null, 2, 3]);
console.log(bfs(tree1)); // Output: [1, 2, 3]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(bfs(tree2)); // Output: [1, 2, 3, 4, 5]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(bfs(tree3)); // Output: [5, 3, 2, 1]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(bfs(tree4)); // Output: [10, 5, 15, 6, 12, 21, 11]



// my solve
/* 

- values = []

traverse(nodes)  HELPER
- valid inputs for nodes:
  - single node (single non-array Object)
  - array of nodes 
- children = []
- if null, return
- if single node (is NOT an array):
  - append value
  - push `left` and `right` to children
- else:
  - push each value to `values`
  - for every child of every value:
    - if value isn't `null`, push the value to `children`
- recursive call using `children` as argument
*/

function bfs(node) {
  const values = [];
  traverse(node);
  return values;

  function traverse(nodesList) {
    if (nodesList === null || nodesList.length === 0) {
      return;
    }

    const children = [];
    
    let pushToChildren = (node) => {
      if (node.left !== null) children.push(node.left);
      if (node.right !== null) children.push(node.right); 
    }

    // if the input is not an array (it's a single node)
    if (!Array.isArray(nodesList)) {
      values.push(nodesList.val);
      pushToChildren(nodesList)
    // else, the input is an array of nodes
    } else {
      for (let n of nodesList) {
        values.push(n.val);
        pushToChildren(n)
      }
    }
    traverse(children);
  }
}