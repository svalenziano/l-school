// Given the root node of a binary tree containing only single-digit
// integers (0-9), implement a function `calculatePathSum` that
// computes the total sum of all root-to-leaf paths.
// A root-to-leaf path is a sequence of nodes from the root to a
// leaf, where each node's value represents a digit in the number
// formed by that path.

// Example 1:
//     5
//    / \
//   3   7
//
// In this tree, there are two root-to-leaf paths:
// 5 -> 3 (representing the number 53)
// 5 -> 7 (representing the number 57)
// The total sum would be 53 + 57 = 110.
//
// Example 2:
//     8
//    / \
//   2   9
//  / \
// 6   4
//
// In this tree, there are three root-to-leaf paths:
// 8 -> 2 -> 6 (representing the number 826)
// 8 -> 2 -> 4 (representing the number 824)
// 8 -> 9 (representing the number 89)
// The total sum would be 826 + 824 + 89 = 1739.

class TreeNode {
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
  const root = new TreeNode(val);
  nodes.push(root);
  while (arr.length > 0) {
    const curr = nodes.shift();
    const left_val = arr.shift();
    if (left_val !== null) {
      curr.left = new TreeNode(left_val);
      nodes.push(curr.left);
    }
    if (arr.length > 0) {
      const right_val = arr.shift();
      if (right_val !== null) {
        curr.right = new TreeNode(right_val);
        nodes.push(curr.right);
      }
    }
  }
  return root;
}

// Test Cases

const tree1 = buildTree([8]);
console.log(calculatePathSum(tree1) === 8);

const tree2 = buildTree([5, 3, 7]);
console.log(calculatePathSum(tree2) === 110);

const tree3 = buildTree([2, 8, 4, 3, 9]);
console.log(calculatePathSum(tree3) === 596);

const tree4 = buildTree([6, 2, 8, null, 5]);
console.log(calculatePathSum(tree4) === 693);

const tree5 = buildTree([3, 7, 2, 1, 9, 5, 4, null, null, 6, 8]);
console.log(calculatePathSum(tree5) === 8614);

const tree6 = buildTree([9, 4, 7, null, 1, 3, null, null, 8]);
console.log(calculatePathSum(tree6) === 10391);

// All test cases should log true
        
        
        
/*
P
//////////////////////////////////////////////////////


E
//////////////////////////////////////////////////////
   8
  / \
 n   n

if `left` and `right` are both `null`, add candidate to `sum`


     5
    / \
   3   7
  /
 9


My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
v1 high level
- use preorder DFS traversal (NLR)
- push to stack during DFS, pop from stack when backtracking
- when null node is reached, generate number from stack, add to sum
- after recursion is complete:
  - return sum

RESULT: THIS WAS TOO COMPLICATED!
v1 low level
- SUCCESS:
  - node val === null?
    - add candidate value to `sum`
    - return
  - ITERATE: setup, recurse, cleanup
    - push node val to candidate
    - traverse left
    - pop from candidate
    - traverse right
    - pop from candidate
    - 
*/

// LS TESTS



// my solve v1
// function calculatePathSum(root) {
//   let sum = 0;
//   let candidate = [];
//   traverse(root);
//   console.log(sum)
//   return sum;

//   function traverse(node) {
//     // success criteria / base case
//     if (node === null) {
//       const value = parseInt(candidate.join(''), 10);
//       console.log(value)
//       sum += value;
//       return;
//     }
//     // setup
//     candidate.push(node.val);
//     // traverse and cleanup
//     traverse(node.left);
//     traverse(node.right);
//     candidate.pop();
//   }
// }

// SV V2, simpler
/* 
algo
v2 high level
  - traverse the tree: DFS - NLR.  Build a candidate list (array) as you go
  - if you're at a leaf (both branches are null)? Add the candidate to sum, then back out: 
    - pop from candidate
    - return
  - otherwise, explore the tree further: traverse left, traverse right.  If node is null, return without doing anything

v2 low level
  - if node is null, return
  - add node to candidate
  - if both left and right are null:
    - add candidate to sum, pop from candidates, and return
  - traverse left
  - traverse right
*/

// function calculatePathSum(root) {
//   let sum = 0;
//   let candidate = [];
//   traverse(root);
//   console.log(sum)
//   return sum;

//   function traverse(node) {
//     if (node === null) {
//       return;
//     }
//     candidate.push(node.val);
//     if (node.left === null && node.right === null) {
//       sum += parseInt(candidate.join(''), 10);
//       candidate.pop();
//       return;
//     }
//     traverse(node.left);
//     traverse(node.right)
//   }
// }


// LS solution
function calculatePathSum(root) {
  function helper(node, currentSum) {
    if (node === null) {
      return 0;
    }

    currentSum = currentSum * 10 + node.val;

    if (node.left === null && node.right === null) {
      return currentSum;
    }

    const leftSum = helper(node.left, currentSum)
    const rightSum = helper(node.right, currentSum)
    return leftSum + rightSum ;
  }
  return helper(root, 0)
}