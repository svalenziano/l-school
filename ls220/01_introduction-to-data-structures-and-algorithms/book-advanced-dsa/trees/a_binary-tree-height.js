// Given the root node of a binary tree, implement a
// function `getHeight` that calculates its height.

// The height of the tree is the level of the
// deepest node or the longest path from the root
// to a leaf node.

// The root node is considered to have a height of 1.

// Example

//      1
//     / \
//    2   3
//   / \
//  4   5


// The height of this binary tree is 3, as the
// longest path from the root node to a leaf node
// (either from 1 to 4 or from 1 to 5) involves 3 nodes.

class Node {
  constructor(value) {
    this.val = value;
    this.left = null;
    this.right = null;
  }
}

// Helper function for test cases
function buildTree(arr) {
  // arr = array of ints or `null` used to build tree
  // return = root node of the newly built tree
  if (arr.length === 0) {
    return null;
  }

  const nodes = [];
  
  // Get first value from `arr`
  const val = arr.shift();
  
  // create tree node and push to the empty `nodes` list
  const root = new Node(val);
  nodes.push(root);

  // While there are still elements in the `arr`
  while (arr.length > 0) {
    // current value?
    const curr = nodes.shift();

    // shift next value from arr
    // if it isn't `null`, create a new node and set it as the left child of the current node
    // and push the node to `nodes` so that it can be assigned children, later
    const leftVal = arr.shift();
    if (leftVal !== null) {
      curr.left = new Node(leftVal);
      nodes.push(curr.left);
    }
    // if there are still values left
    // shift next val from arr
    // if it isn't `null`, create a new node and set as right child of current node
    // and push the node to `nodes` so that it can be assigned children, later
    if (arr.length > 0) {
      const rightVal = arr.shift();
      if (rightVal !== null) {
        curr.right = new Node(rightVal);
        nodes.push(curr.right);
      }
    }
  }
  // return the root of the tree
  return root;
}

// Test Cases

const tree1 = buildTree([1]);
console.log(getHeight(tree1) === 1);

const tree2 = buildTree([1, 2, 3, null, null, 4, 5]);
console.log(getHeight(tree2) === 3);

const tree3 = buildTree([1, 2, 3, 4, 5, 6, 7]);
console.log(getHeight(tree3) === 3);

const tree4 = buildTree([1, 2, 3, null, null, 4, 5, null, null, null, 6]);
console.log(getHeight(tree4) === 4);

const tree5 = buildTree([1, 2, null, 3, null, 4, null, 5, 6, null, null, null, 7]);
console.log(getHeight(tree5) === 6);

const tree6 = buildTree([1, 2, null, 3, null, 4, null, 5, null, 6, 8, null, 7, null, 9, null, null, null, 10]);
console.log(getHeight(tree6) === 8);
// All test cases should log true


/* 
MY SOLVE

- In order to determine the height of the tree, you need to follow each possible branch.
- The tree nodes don't provide a method for getting the parent of the node, so you must count the nodes while traversing downwards
- 

option 1:
  - max = 0;
  - For each possible path from root to leaf
    - Count the height of the path
    - If the count is higher than `max`, update `max`

  How to get each possible path?
    - v1
      - generate all possible combinations
      - explore each combination sequentially
    - v2
      - for each node
        - determine if it has a left and/or a right child
          - do the same for each of those children

  - v3 (recurisve, based on v2)
      Recursive definition >>> The maximum height of a tree is 1+ the greatest of the left subtree height and the right subtree height

      Base case >>> If the left child and right child are both null, the height is 1 (return 1)

      Algo
        - for each node
          - if the node has a left child, get that value
          - if the node has a right child, get that value

*/

// my solve
function getHeight(treeRoot) {
  if (treeRoot === null) {
    return 0;
  }
  if (treeRoot.left === null && treeRoot.right === null) {
    return 1;
  }
  return 1 + Math.max(getHeight(treeRoot.left), getHeight(treeRoot.right));
}

// ls solve
function getHeight(root) {
  if (root === null) {
    return 0
  }

  return 1 + Math.max(getHeight(root.left), getHeight(root.right))
}