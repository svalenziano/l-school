class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }
  peek() {
    // Returns the value of the top most element without removing it.

    // If the queue is empty, it returns `null`.
    return this.front;
  }

  enqueue(value) {
    // Adds an item to the queue
    // create a new node
    // If there's a back of the line
      // point that node towards the new node
    // set the new node as the `back` (regardless)
    // if there's not a front of the line,
      // set the new node as the `front`, too
  }

  dequeue() {
    // Removes the item from the queue and returns it
    // if `front`:
      // create `oldFront` to hold current `front` value
      // if `front` has a `next` value:
        // point `front` towards 2nd-in-line
      // else:
        // set `front` to `null`
        // set `back` to `null`
      // return `oldFront`
    // Else:
      // returns `null`.
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(2);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.enqueue(3);
console.log('Front element:', myQueue.peek());  // logs 'Front element: 1'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 2'
myQueue.dequeue();
console.log('Front element after dequeue:', myQueue.peek());  // logs 'Front element after dequeue: 3'
myQueue.dequeue();
console.log('Peek on empty queue:', myQueue.peek());  // logs 'Peek on empty queue: null'
console.log('`back` on empty queue:', myQueue.back);  // logs '`back` on empty queue: null'