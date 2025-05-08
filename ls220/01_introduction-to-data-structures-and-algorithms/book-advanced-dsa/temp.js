"use strict";
/* 
From McDowell p.95


Input: linked list, each node containing a single digit.  Digits are stored in 'reverse order'

Rules: You 
*/

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
  let dummy = new ListNode(0);
  let cur = dummy;
  arr.forEach(val => {
    cur.next = new ListNode(val);
    cur = cur.next;
  });
  return dummy.next;
}



let list1 = createLinkedList([3, 5, 8, 5, 10, 2, 1]);
list1 = partition(list1, 5)

let list2 = createLinkedList([1, 2, 3]);
list2 = partition(list2, 5)

let list3 = createLinkedList([4, 5, 6, 7, 1, 2, 3]);
list3 = partition(list3, 3)

printLinkedList(list1); // Expected (order may vary, partition indicated by =>): 
                        // 3 -> 1 -> 2 => 10 -> 5 -> 5 -> 8
printLinkedList(list2); // Expected: 1 -> 2 -> 3
printLinkedList(list3); // Expected: 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7



/* 
my solve

*/
