/*
Write a function that, given the head of a linked list, keeps `m` nodes, and discards `n` nodes, returning the head of the new linked list.

You must iterate through the entirety of the linked list from head to tail.
*/
function ListNode(val, next=null) {
  this.val = val;
  this.next = next;
}

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}

function printLinkedList(head) {
  let currentNode = head;
  let listStr = '';
  while (currentNode !== null) {
      listStr += currentNode.val + ' -> ';
      currentNode = currentNode.next;
  }
  listStr += 'null'; // Indicate the end of the list
  console.log(listStr);
}

function testKeepAndDiscard(array, m, n) {
  let head = createLinkedList(array);
  printLinkedList(keepAndDiscard(head, m, n));
}

                                      // Expected values listed below:
testKeepAndDiscard([1,2,3,4], 1, 1);  // 1 -> 3 -> null
testKeepAndDiscard([1,2,3,4], 2, 2);  // 1 -> 2 -> null
testKeepAndDiscard([1,2,3,4], 5, 1);  // 1 -> 2 -> 3 -> 4 -> null
testKeepAndDiscard([1,2,3,4], 1, 0);  // 1 -> 2 -> 3 -> 4 -> null
testKeepAndDiscard([1,2,3,4], 0, 1);  // null
testKeepAndDiscard([], 1, 1);  // null

                                             // Expected values, depicted as an array (not a LL)
testKeepAndDiscard([1,2,3,4,5,6,7,8], 2, 1)  // [1,2, 4,5, 7, 8]
testKeepAndDiscard([1,2,3,4,5,6,7,8], 2, 2)  // [1,2, 5,6]
testKeepAndDiscard([1,2,3,4,5,6,7,8], 2, 3)  // [1,2, 6,7]


// More tests from Claude:
// Edge case: m = 0, n = 0 (should return null)
testKeepAndDiscard([1,2,3,4], 0, 0);  // null
// Edge case: m > list length, n > 0 (should keep all nodes)
testKeepAndDiscard([1,2,3], 10, 2);  // 1 -> 2 -> 3 -> null
// Edge case: m = 1, n > list length (should keep only the first node)
testKeepAndDiscard([1,2,3], 1, 10);  // 1 -> null
// Edge case: m = 2, n = 2, list length = 3 (should keep first two nodes)
testKeepAndDiscard([1,2,3], 2, 2);  // 1 -> 2 -> null
// Edge case: m = 1, n = 1, single node list (should keep the first node)
testKeepAndDiscard([1], 1, 1);  // 1 -> null
// Edge case: m = 1, n = 1, two node list (should keep first, skip second)
testKeepAndDiscard([1,2], 1, 1);  // 1 -> null
// Edge case: m = 2, n = 1, two node list (should keep both)
testKeepAndDiscard([1,2], 2, 1);  // 1 -> 2 -> null
// Edge case: m = 1, n = 1, three node list (should keep 1, skip 2, keep 3)
testKeepAndDiscard([1,2,3], 1, 1);  // 1 -> 3 -> null


// Your solution here
function keepAndDiscard(head, m, n) {
  return head;
}


/*
d [1,2,3,4], 1, 1
       c
            n

d [1,2,3,4], 4, 1
            c
              n

start c at dummy
repeat `m` times:
  if c === null: return
  move c (c = c.next)
repeat `n` times:
  if c.next === null: return
  re-point c.next (c.next = c.next.next)
*/

function keepAndDiscard(head, m, n) {
  if (m === 0) return null;

  let dummy = new ListNode('dummy', head);
  let c = dummy;
  while (c) {
    for (let i = 0; i < m; i++) {
      if (!c) return dummy.next;
      c = c.next;
    }
    for (let i = 0; i < n; i++) {
      if (!c || !c.next) return dummy.next;
      c.next = c.next.next;
    }
  }
  return dummy.next
}
