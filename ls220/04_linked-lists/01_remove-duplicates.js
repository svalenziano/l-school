"use strict";
// Write a function `removeDuplicates` that removes all
// nodes with duplicate values from a sorted linked list,
// leaving only distinct values from the original list.
// The function should take the head of the sorted linked
// list as input and return the modified list. The list
// should remain sorted after removing duplicates. If the
// list becomes empty after removing all duplicates,
// return null.

// Example:
// Input: head = [1, 2, 2, 3, 3, 4, 5, 5]
// Output: [1, 4]
// Explanation: The values 2, 3, and 5 appear multiple times, so
//              they are removed. Only 1 and 4 remain as unique
//              values.

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


let list1 = createLinkedList([1, 2, 2, 3, 3, 4, 5, 5]);
let list2 = createLinkedList([1, 1, 1, 2, 3]);
let list3 = createLinkedList([1, 2, 3, 4, 5]);
let list4 = createLinkedList([1, 1, 1, 1, 1]);
let list5 = createLinkedList([1, 2, 2, 3, 3, 3, 4, 4, 5, 5, 5]);

printLinkedList(removeDuplicates(list1)); // Expected: 1 -> 4 -> null
// printLinkedList(removeDuplicates(list2)); // Expected: 2 -> 3 -> null
// printLinkedList(removeDuplicates(list3)); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> null
// printLinkedList(removeDuplicates(list4)); // Expected: null
// printLinkedList(removeDuplicates(list5)); // Expected: 1 -> null


        
        
        
/*
P
//////////////////////////////////////////////////////
INPUT = head of linked list
RETURN = head of same linked list
Side effect = modify the linked list referenced by `head`

Rules = 
  - if a value occurs more than once, remove all occurences of that value
  - input list is sorted, ascending
  - if list becomes empty, return `null`

E
//////////////////////////////////////////////////////

1 -> 1 -> 2 -> null
  - Start at head
  - next value is same as current
  - set valToRemove = 1
  - while value = valToRemove
    - set head as `next`
  - 

  ALGO
  v1 high level
    - Iterate from head to tail
    - If a duplicate is found, (next val === current val), note that value for removal
    - Remove all instances of the value, pointing the last valid value to the next valid value
    - Return a reference to the first valid value (the head)

  O(2n) low level
    - Iterate from head to tail                      O(n)
      - Make set of duplicate values, for O(1) retrieval
    - Iterate from head to tail                       O(n)
      - If current value is in `duplicates`           O(1) for membership test
        - point head to next value
        - set `current` to `next`    
      - If current.next value is in `duplicates` point current.next to `next next`
      - If current.next is `null`, return head
      - point current to current.next
  
  1 -> 1 -> 2 -> null


  O(n) low level
    - current = head
    - create a new head and point head.next to `current` (allows you to remove `current` if necessary)
      - head = new Node()
      - head.next = current 
    - current now points to the old head
    - previous = head
    - if current === null, return head
    - If current.val === current.next.val (it's a dupe!):
      - toRemove = current.val
    - if current.val === toRemove (it's a dupe!)
      - previous.next = current.next (remove one node at a time)
      - current = previous.next ()

1 -> 1 -> 1 -> null


My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
  - start at head of list
  - while current current node isn't `null`:
    - if next value is same as current value
      - remove all instances of valToRemove
  - 
*/

function removeDuplicates(head) {
  let dummy = new ListNode('dummy');
  dummy.next = head;
  let current = dummy;
  let dupe;
  while (current !== null 
      && current.next !== null) {
    // printLinkedList(dummy)
    console.log(current.val)
    if (current.next.val === dupe) {
      current.next = current.next.next ?? null;
    } else {
      if (isDupe(current)) {
        dupe = current.val;
        console.log('found dupe', dupe)
      }
    }
    current = current.next;
  }
  return dummy.next; // return the head
}

function isDupe(node) {
  if (node.next !== null && (node.next.val === node.val)) {
    return true;
  }
  return false;
}


