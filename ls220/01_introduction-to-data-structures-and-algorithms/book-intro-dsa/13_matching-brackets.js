// Write a function `areMatched` that takes a string as an argument
// and returns true if all types of brackets (parentheses (),
// square brackets [], and curly braces {}) in the string are
// properly matched. For the brackets to be considered
// matched, every opening bracket must have a corresponding
// closing bracket of the same type, and the brackets must be
// correctly nested.

// console.log(areMatched("()"));              // Output: true
// console.log(areMatched("([()]{})"));        // Output: true
// console.log(areMatched("{{[[(())]]}}"));    // Output: true
// console.log(areMatched(""));                // Output: true
// console.log(areMatched("([((}]({}))"));     // Output: false
// console.log(areMatched("([)]"));            // Output: false


/* 
MY SOLVE

LS SOLUTION USES AN ARRAY TO CREATE THE STACK.  I USED A LINKED LIST.

P
//////////////////////////////////////////
Given a string, return a boolean that indicates whether or not ever bracket (parentheses, square bracket, and curly brace) is matched correctly. 

Rules:
  - Given an open bracket, the next bracket must either be a closing bracket of the same type, or an open bracket of another type

Extraneous rules (true, but not helpful)
  - If any opening bracket lacks a closing bracket, return false
  - If a closing bracket occurs before an opening bracket, return false
  - If an opening bracket occurs within the span of another bracket pair, it must be closed within that bracket pair, else return false

E
//////////////////////////////////////////

*/

/* 

D
//////////////////////////////////////////
Object: track opening brackets and their corresponding closing brackets

Stack - track brackets that are encountered

A
//////////////////////////////////////////
- if a bracket of any type is encountered
  - if the bracket is an opening bracket
    - push that bracket onto the stack
  - if the bracket is a closing bracket
    - pop a bracket off the stack
    - if null (the stack was empty) or if the bracket is NOT of the same type:
      - return false
- return true

HELPER:
  sameBracketType(bracket1, bracket2)
    - INPUT = two single-char strings
    - return bracket1 === bracketPairs[bracket2]

*/

const bracketPairs = {
  '(': ')',
  '{': '}',
  '[': ']',
}

const brackets = Object.keys(bracketPairs)
  .concat(Object.values(bracketPairs))

const isOpeningBracket = (x) => Object.keys(bracketPairs).includes(x)
const isClosingBracket = (x) => Object.values(bracketPairs).includes(x)

function isBracketPair(bracket1, bracket2) {
  // input = strings of length 1
  return bracketPairs[bracket1] === bracket2;
}

// console.log(isBracketPair('{', '}') === true)
// console.log(isBracketPair('[', ']') === true)
// console.log(isBracketPair('[', '}') === false)
// console.log(isBracketPair('[', ')') === false)
// console.log(isBracketPair('', ')') === false)





class LinkedListNode {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }

  length() {
    return this.next === null ? 1 : this.next.length() + 1
  }
}

const test = new LinkedListNode(1);
test.next = new LinkedListNode(2);
test.next.next = new LinkedListNode(3);
test.next.next.next = new LinkedListNode(4);
console.log(test.length())

class Stack {
  constructor() {
    this.top = null;
  }

  peek() {
    return this.top ? this.top.val : null;
  }

  push(v) {
    let n = new LinkedListNode(v, this.top);
    this.top = n;
  }

  pop() {
    if (!this.top) {
      return null;
    }
    let popped = this.top.val;
    this.top = this.top.next
    return popped;
  }

  length() {
    return this.top ? this.top.length() : 0;
  }
}

function areMatched(str) {
  const bracketStack = new Stack();
  for (let char of str) {
    if (brackets.includes(char)) {
      if (isOpeningBracket(char)) {
        bracketStack.push(char);
      } else if (isClosingBracket(char)) {
        let closingBracket = bracketStack.pop();
        if (closingBracket === null || !isBracketPair(closingBracket, char)) {
          return false;
        }
      }
    }
  }
  return bracketStack.length() === 0;
}

// // TESTS FOR Stack CLASS
// const myStack = new Stack();
// myStack.push(1);
// console.log('Top element:', myStack.peek());  // logs 'Top element: 1'
// myStack.push(2);
// console.log('Top element:', myStack.peek());  // logs 'Top element: 2'
// myStack.push(3);
// console.log('Top element:', myStack.peek());  // logs 'Top element: 3'
// myStack.pop();
// console.log('Top element after pop:', myStack.peek());  // logs 'Top element after pop: 2'
// myStack.pop();
// console.log('Top element after pop:', myStack.peek());  // logs 'Top element after pop: 1'
// myStack.pop();
// console.log('Peek on empty stack:', myStack.peek());    // logs 'Peek on empty stack: null'


// LS tests

console.log(areMatched("()"));              // Output: true
console.log(areMatched("([()]{})"));        // Output: true
console.log(areMatched("{{[[(())]]}}"));    // Output: true
console.log(areMatched(""));                // Output: true
console.log(areMatched("([((}]({}))"));     // Output: false
console.log(areMatched("([)]"));            // Output: false

// SV tests
console.log(areMatched("("));            // Output: false
