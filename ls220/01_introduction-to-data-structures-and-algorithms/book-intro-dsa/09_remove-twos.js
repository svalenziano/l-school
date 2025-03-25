// LS PROMPT
/////////////////////////////////////////////////////////////////////////////
// Given the head of a linked list, remove all
// occurrences of the value 2 from the linked list.

// Input:  1 -> 2 -> 3 -> 2 -> 4 -> null
// Output: 1 -> 3 -> 4 -> null

// Input:  2 -> 3 -> 2 -> null
// Output: 3 -> null

// Input:  null
// Output: null


// NODE CLASS
/////////////////////////////////////////////////////////////////////////////

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


// EXAMPLES AND TEST CASES
/////////////////////////////////////////////////////////////////////////////
// Test case 1
const head1 = new ListNode(1);
head1.next = new ListNode(2);
head1.next.next = new ListNode(3);
head1.next.next.next = new ListNode(2);
head1.next.next.next.next = new ListNode(4);

console.log("Input: ", stringifyList(head1));
console.log("Output:", stringifyList(deleteTwos(head1)));
// Input:  1 -> 2 -> 3 -> 2 -> 4 -> null
// Output: 1 -> 3 -> 4 -> null

// Test case 2
const head2 = new ListNode(2);
head2.next = new ListNode(3);
head2.next.next = new ListNode(2);

console.log("Input: ", stringifyList(head2));
console.log("Output:", stringifyList(deleteTwos(head2)));
// Input:  2 -> 3 -> 2 -> null
// Output: 3 -> null


// Helpfer function
// Helper function to format the linked list into a string
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

// MY SOLVE
/////////////////////////////////////////////////////////////////////////////
/* 
P
////////////////////////////////////////
Write a function that deletes all twos from the linked list
Input = head of linked list
Return = head of the mutated linked list
Side effect = mutate the linked list

E
////////////////////////////////////////
  // Input:  1 -> 2 -> 3 -> 2 -> 4 -> null
  // Output: 1 -> 3 -> 4 -> null


D
////////////////////////////////////////
Pointers:
  - prev
  - curr (current)
The node class:
  - val = integer value
  - next = next node or null

Algo for 'deleteTwos'
////////////////////////////////////////
v1 high level
  - iterate through the linked list, deleting instance of the target that are encountered


  - prev = null
  - curr = head
  - if curr is not null:
    - if curr is target:
      - if prev is not null:
        - set prev.next to curr.next (remove curr from linked list)
      - else (prev is null, meaning curr is the head of the linked list)
        - head = curr.next (redefine the head of the LL, discarding the old head)
    - else (current is not target)
      - prev = curr
    - curr = curr.next
  - return head
*/
function deleteTwos(head, target=2) {
  // Setup pointers to track previous and current nodes
  let prev = null;
  let curr = head;
  // while curr is not null (this loop ends when the tail of the LL is reached)
  while (curr) {
    // if value of curr matches target, remove it from the LL!
    if (curr.val === target) {
      if (prev) {
        prev.next = curr.next;
      } else {
        head = curr.next;
      }
    // otherwise (current is not target), setup `prev` for the next iteration
    } else {
      prev = curr;
    }
    // regardless, move on to the next node
    curr = curr.next;
  }
  // Return the head of the new linked list.
  // If the previous head WASN'T removed, this will be a reference to
  // the same object that was passed in.  If it WAS removed, then it will be a
  // reference to the new head node.
  return head;
}