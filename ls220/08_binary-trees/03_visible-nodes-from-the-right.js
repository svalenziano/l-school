// Given the root of a binary tree, return an array of the node
// values visible when the tree is viewed from the right side.

// Example 1:

//    1
//   / \
//  2   3
//   \   \
//    5   4

// Input: [1,2,3,null,5,null,4]
// Output: [1,3,4]

// Example 2:

//    1
//     \
//      3

// Input: [1,null,3]
// Output: [1,3]

function visibleNodes(root) {
  // Your implementation here
}

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to build a tree from an array
function buildTree(arr) {
  if (arr.length === 0) return null;
  const root = new TreeNode(arr[0]);
  const queue = [root];
  let i = 1;
  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();
    if (arr[i] !== null) {
      node.left = new TreeNode(arr[i]);
      queue.push(node.left);
    }
    i++;
    if (i < arr.length && arr[i] !== null) {
      node.right = new TreeNode(arr[i]);
      queue.push(node.right);
    }
    i++;
  }
  return root;
}

// Test cases
console.log(visibleNodes(buildTree([1,2,3,null,5,null,4]))); // Expected: [1,3,4]
console.log(visibleNodes(buildTree([1,null,3]))); // Expected: [1,3]
console.log(visibleNodes(buildTree([]))); // Expected: []
console.log(visibleNodes(buildTree([1,2,3,4]))); // Expected: [1,3,4]
console.log(visibleNodes(buildTree([1,2,3,null,5,null,4,6,null,7]))); // Expected: [1,3,4,7]
console.log(visibleNodes(buildTree([1,2,3,null,4,5,6,null,null,7]))); // Expected: [1,3,6,7]
console.log(visibleNodes(buildTree([1,2,3,4,5,6,7]))); // Expected: [1,3,7]
console.log(visibleNodes(buildTree([1,2,3,4,null,5,6,7,null,null,null,8]))); // Expected: [1,3,6,8]
console.log(visibleNodes(buildTree([1,2,3,4,5,null,6,null,null,7]))); // Expected: [1,3,6,7]
console.log(visibleNodes(buildTree([1,2,3,4,null,5,null,6,null,7,null,8]))); // Expected: [1,3,5,7,8]
        
        
        
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
- do a DFS traversal: NLR.  If a right node exists, it overrides the left node at that level.
- Base case = node is null
- Recursive definition: The 'side view' of a tree is the node plus the .... eh, not working

v2 high level
- result = []
- do a BFS traversal.  For each level, push the rightmost node to `result`

v2 low level
- BFS traversal
  - queue = []
  - get the length of the queue
  - for each index btw 0 and length:
    - 
- 

*/

// LS TESTS



// LS solution
function visibleNodes(root) {
  if (!root) return [];

  const queue = [root];
  const result = [];

  while (queue.length > 0) {
    const n = queue.length;

    for (let idx = 0; idx < n; idx++) {
      const curr = queue.shift();

      if (idx === n - 1) {
        result.push(curr.val);
      }

      if (curr.left) {
        queue.push(curr.left);
      }

      if (curr.right) {
        queue.push(curr.right);
      }
    }
  }

  return result;
}