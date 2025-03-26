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
    if (this.front) return this.front.val
    return null;
  }

  enqueue(value) {
    // Adds an item to the queue
    // create a new node
    let n = new ListNode(value)
    // If there's a back of the line
    if (this.back) {
      // point that node towards the new node
      this.back.next = n;
    }
    // set the new node as the `back` (regardless)
    this.back = n;
    // if there's not a front of the line,
    if (!this.front) {
      // set the new node as the `front`, too
      this.front = n;
    }
  }

  dequeue() {
    // Removes the item from the queue and returns it
    // if `front`:
    if (this.front) {
      // create `oldFront` to hold current `front` value
      let oldFront = this.front;
      // if `front` has a `next` value:
      if (this.front.next) {
        // point `front` towards 2nd-in-line
        this.front = this.front.next;
      } else {
        this.front = null;
        this.back = null;
      }
      return oldFront.val;
    }
    return null;
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