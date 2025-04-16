"use strict";
// Write a function `reverseSegment` that reverses a segment
// of a singly linked list between two given positions,
// `start` and `end`. The function should take the head of
// the linked list and two integers, `start` and `end`, as
// input and return the modified list.

// The positions `start` and `end` are 1-indexed, and `start`
// is guaranteed to be less than or equal to `end`.

// The list is guaranteed to have at least one node, and `start`
// and `end` are guaranteed to be within the bounds of the list.

// Example:
// Input: head = [1, 3, 5, 7, 9], start = 2, end = 4
// Output: [1, 7, 5, 3, 9]
// Explanation: The segment from position 2 to 4 (3 -> 5 -> 7)
//              is reversed to (7 -> 5 -> 3).

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

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

function createLinkedList(arr) {
  let head = new ListNode(0);
  let current = head;
  arr.forEach(val => {
    current.next = new ListNode(val);
    current = current.next;
  });
  return head.next;
}



let list1 = createLinkedList([1, 3, 5, 7, 9]);
let list2 = createLinkedList([1, 2, 3]);
let list3 = createLinkedList([1]);
let list4 = createLinkedList([1, 2, 3, 4, 5, 6]);
let list5 = createLinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

printLinkedList(reverseSegment(list1, 2, 4)); // Expected: 1 -> 7 -> 5 -> 3 -> 9 -> null
printLinkedList(reverseSegment(list2, 1, 3)); // Expected: 3 -> 2 -> 1 -> null
printLinkedList(reverseSegment(list3, 1, 1)); // Expected: 1 -> null
printLinkedList(reverseSegment(list4, 3, 5)); // Expected: 1 -> 2 -> 5 -> 4 -> 3 -> 6 -> null
printLinkedList(reverseSegment(list5, 4, 7)); // Expected: 1 -> 2 -> 3 -> 7 -> 6 -> 5 -> 4 -> 8 -> 9 -> 10 -> null
        
        
        
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
SEE 
reverse-segment-of-linked-list.excalidraw
in obsidian

*/

// MY SOLUTION
function reverseSegment(head, start, end) {
  let curr = head;
  let dummy = new ListNode('dummy', curr);
  let prev = dummy;
  let lst1tail;
  let lst2tail;
  let idx = 1;

  let movePointers = () => {
    prev = curr;
    curr = curr.next;
  }
  
  while (curr !== null) {
    if (idx === start) {
      lst1tail = prev;
      lst2tail = curr;
      movePointers();

    } else if (start < idx && idx < end) {
      const nextNode = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextNode;

    } else if (idx === end) {
      lst1tail.next = curr;
      lst2tail.next = curr.next;
      curr.next = prev;
      prev = lst2tail;
      curr = lst2tail.next;
      return dummy.next;

    } else {
      movePointers();
    }

    idx += 1;

  }
  return dummy.next;
}


// LS solution
// comments are mine
function reverseSegment(head, start, end) {
  let dummy = new ListNode();
  dummy.next = head;
  let prev = dummy;
  let curr = head;

  // Move pointers to start of `segmentToBeReversed`
  for (let i = 0; i < start - 1; i++) {
    prev = curr;
    curr = curr.next;
    // Decrement `end` so that you can use zero-based indexing when
    // determining if you've hit the `end` of the segmentToBeReversed
    end--;
  }

  // Store references for later use
  let connection = prev;
  let tail = curr;

  // This is the standard method for reversing an LL
  for (let i = 0; i < end; i++) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  // Resolve loose-ends and return the head of the new LL
  connection.next = prev;
  tail.next = curr;
  return dummy.next;
}
