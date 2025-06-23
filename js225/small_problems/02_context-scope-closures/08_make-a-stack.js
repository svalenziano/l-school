'use strict';



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


*/

// my solve
// Use closure to give the object access to a private array
function newStack() {
  let stackArray = [];
  function helper() {
    return {
      push(val) {stackArray.push(val);},
      pop() {return stackArray.pop();},
      printStack() {console.log(stackArray.join(', '));},
    };
  }
  
  return helper();
}


// my tests
let x = newStack();
x.push(0);
x.push(1);
x.push(2);
console.log(x.pop());  // 2
x.printStack(); // 0, 1
x.pop();
x.printStack(); // 0
console.log(x.stackArray); // undefined  
                       // (array is private / is not a property of the obj)