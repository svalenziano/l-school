/*
McDowell p.109, 4.3 "List of Depths"

Given a binary tree, write a function `listOfDepths` which creates a linked list of all the node values at each depth (eg, if you have a tree with depth D, you'll have D linked lists)

The function should return an array of linked list heads.  The length of the array should be equal to the depth of the tree.

Have a close look at the `runTest` function below to see how your function will be tested.

// Example 1:

// Input: [1,2,3,4,5]
// Equivalent to:

//     1
//    / \
//   2   3
//  / \
// 4   5

// Output: [1, 2, 4] <== each integer in this array is actually the head of an LL
// Equivalent to:

1 -> null
2 -> 3 -> null
4 -> 5 -> null

// Example 2:

// Input: [1,null,2,3]
// Equivalent to:

//  1
//   \
//    2
//   /
//  3

// Output: [1, 2, 3]
// Equivalent to:

1 -> null
2 -> null
3 -> null

*/

// BINARY TREE HELPER FUNCTIONS
class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

// Helper function to build a tree from an array in level-order
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

// LINKED LIST HELPER FUNCTIONS
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// This function prints nodes separated by `->`, eg 1 -> 2 -> null
function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
    listStr += currentNode.val + ' -> ';
    currentNode = currentNode.next;
  }
  listStr += 'null';
  console.log(listStr);
}

// MAIN TESTING FUNCTION
function runTest(arr) {
  // input = array of integers
  // output = print each linked list
  console.log("\n[", String(arr),"]")
  let root = buildTree(arr)
  let result = listOfDepths(root); // This is the function that's being tested
  if (result) {
    result.forEach((head) => printLinkedList(head))
  } else {
    console.log('null')
  }
}

// Test cases

runTest([1,2,3,4,5]);
/*
Expect:
1 -> null
2 -> 3 -> null
4 -> 5
*/

runTest([1,null,2,3]);
/*
Expect:
1 -> null
2 -> null
3 -> null
*/

runTest([1,2,5,3,4,null,6]);
/*
Expect:
1 -> null
2 -> 5 -> null
3 -> 4 -> 6 -> null
*/

runTest([]);
// Expect: null

runTest([1]);
/*
Expect:
1 -> null
*/

runTest([1,2,3,null,4,5,6]);
/*
Expect:
1 -> null
2 -> 3 -> null
4 -> 5 -> 6 -> null
*/

runTest([1,2,3,4,5,6,7]);
/*
Expect:
1 -> null
2 -> 3 -> null
4 -> 5 -> 6 -> 7 -> null
*/

runTest([1,2,null,3,null,4,null,5]);
/*
Expect:
1 -> null
2 -> null
3 -> null
4 -> null
5 -> null
*/


runTest([1,null,2,null,3,null,4,null,5]);
/*
Expect:
1 -> null
2 -> null
3 -> null
4 -> null
5 -> null
*/

runTest([1,null,2,null,3,null,4,null,5,6,7,8,9,10,null,101,102,103,104,105,106]);
/*
Expect:
1 -> null
2 -> null
3 -> null
4 -> null
5 -> null
6 -> 7 -> null
8 -> 9 -> 10 -> null
101 -> 102 -> 103 -> 104 -> 105 -> 106 -> null
*/

function listOfDepths(root) {
  
}