// Given the head of a linked list, reverse the list and return it.

// Input: 1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null


/* 
MY HYPOTHESIS

- iterate through the list
- point the first element to null
- point each subsequent element to the previous element
*/


// LS setup
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Helper function to print the linked list
function printList(head) {
  let curr = head;
  let result = "";
  while (curr !== null) {
    result += curr.val + " -> ";
    curr = curr.next;
  }
  result += "null";
  return result;
}

// Test case 1
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(4);

console.log("Input: ", printList(head1));
console.log("Output:", printList(reverseLinkedList(head1)));
// Input:  1 -> 2 -> 3 -> 4 -> null
// Output: 4 -> 3 -> 2 -> 1 -> null


// MY SOLVE
///////////////////////////////////////////////////////////////////////////////

// Algo
/* 
V1 - THIS DOESN'T WORK!
  - Create pointers:
    - prev = null
    - curr = head
  - while (curr.next) is not null:
    - set curr.next to prev
    - set prev to curr
    - set curr to curr.next  <- Oh noooooooooo

V2
  - Create pointers:
    - prev = null
    - curr = head
  - while (curr.next) is not null:
    - next = curr.next
    - set curr.next to prev
    - set prev to curr
    - set curr to next  <- Yay!
  - return prev (this is the new head)

*/



function reverseLinkedList(head) {
}