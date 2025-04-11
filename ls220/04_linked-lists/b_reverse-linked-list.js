"use strict";

class ListNode {
  constructor(val=undefined, next=null) {
    this.val = val;
    this.next = next;
  }
}

// Let's make a linked list with the node
let list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(3);
list1.next.next.next = new ListNode(4);

console.log(stringifyList(list1))  // Expect: 1 -> 2 -> 3 -> 4 -> null
list1 = reverse(list1)
console.log(stringifyList(list1))  // Expect: 4 -> 3 -> 2 -> 1 -> null



// Input: head of the LL you wish to reverse
// Return: head of the new LL
// Mutation: modifies each node of the LL
// Warning: this function both returns and mutates!
function reverse(head) {
  let curr = head;
  let prev = null;
  while (curr !== null) {
    const nextNode = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextNode;
  }
  return prev;  // Since curr is `null`, `prev` is the new `head`
}




// Helper function to format the linked list into a string
// Ex: 1 -> 2 -> 3
function stringifyList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}