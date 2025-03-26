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
    return this.front ? this.front.val : null;
  }

  enqueue(value) {
    let n = new ListNode(value)
    if (this.back) this.back.next = n; // update pointer
    this.back = n;  // update queue object
    if (!this.front) this.front = n;
  }

  dequeue() {
    // Removes the item from the queue and returns it
    // if `front`:
    if (!this.front) {
      return null;
    }
    let oldFront = this.front;
    // Update the queue object to use the 2nd element as new `front`
    this.front = this.front.next;
    if (!this.front) this.back = null;
    return oldFront.val;
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