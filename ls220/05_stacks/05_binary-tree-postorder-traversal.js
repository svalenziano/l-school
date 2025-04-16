// Given the root node of a binary tree, implement a
// function `postorderTraversal` that returns an
// array containing the values of the nodes visited in
// an postorder traversal.

// Your task is to implement the function iteratively using a stack.

function postorderTraversal(root) {
  // Implementation goes here
}

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
console.log(postorderTraversal(tree1)); // Output: [3, 2, 1]

const tree2 = buildTree([1, 2, 3, null, null, 4, null, null, 5]);
console.log(postorderTraversal(tree2)); // Output: [2, 5, 4, 3, 1]

const tree3 = buildTree([5, 3, null, 2, null, 1, null]);
console.log(postorderTraversal(tree3)); // Output: [1, 2, 3, 5]

const tree4 = buildTree([10, 5, 15, null, 6, 12, 21, null, null, 11]);
console.log(postorderTraversal(tree4)); // Output: [6, 5, 11, 12, 21, 15, 10]
        
        
        
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
v1 high level
  - result = []
  - leftStack = []
  - rightStack = []
  - curr = root
  - while current !== null and stack is not empty:
    - traverse left as far as possible (while curr !== null)
      - push node to stack, set curr to `curr.left`
    - traverse as far right as possible (while curr !== null)
      - push node to stack, set curr to `curr.right`
    - set curr to a node popped from the leftStack, if available, otherwise the rightStack
    - push node value to result array

v2 high level
  - keep going left until you hit null:
    - add `left` nodes to left stack
    - add `right` nodes to right stack
  - pop a single node from the left stack and push to result(process the last non-null node)
  - pop and process a single node from the right stack
  - 
  - pop a node and go right until you hit null
  - back out, adding node to `result`
*/

// LS TESTS



// LS solution
function postorderTraversal(root) {
  const stack1 = [root];
  const stack2 = [];
  const result = [];

  while(stack1.length > 0) {
    const node = stack1.pop();
    stack2.push(node);

    if(node.left) stack1.push(node.left);
    if(node.right) stack1.push(node.right);
  }

  while(stack2.length > 0) {
    const node = stack2.pop();
    result.push(node.val);
  }

  return result;
}



// dc solution
