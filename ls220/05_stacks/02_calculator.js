// Create a function `calculator` that evaluates arithmetic
// expressions given as strings. The function should support
// basic arithmetic operations: addition (+), subtraction (-),
// multiplication (*), and division (/).

// The function should:
// 1. Accept a string input representing a valid arithmetic expression.
//    The input will consist of non-negative integers, arithmetic
//    operator(+, -, *, /), and may contain whitespace characters.
// 2. Evaluate the expression following the standard order of operations
//    (multiplication and division before addition and subtraction).
// 3. Return the result as an integer.

// For division operations, the result should be rounded down to
// the nearest integer (floor division).

// You can assume that the input will never contain division by zero.

// Note: Implement the calculation logic yourself without using
// any built-in expression evaluation functions.

// Examples:
//
// 1. Input: "4 + 3 * 2"
//    Output: 10
//    Explanation: 3*2 is evaluated first (6), then added to 4.
//
// 2. Input: "15 / 3 - 2"
//    Output: 3
//    Explanation: 15/3 is 5, then 2 is subtracted.
//
// 3. Input: "10 + 8 / 3"
//    Output: 12
//    Explanation: 8/3 is 2 (rounded down), then added to 10.



console.log(calculator("6 - 2") === 4);
console.log(calculator(" 8 / 3") === 2);
console.log(calculator("2+3*4") === 14);
console.log(calculator("10 - 2 * 3 + 4 ") === 8);
console.log(calculator(" 20 / 4 * 2 + 7") === 17);
console.log(calculator("5 + 3 * 2 - 8 / 4") === 9);
console.log(calculator("10+5/4-3*2+2") === 7);
console.log(calculator(" 30 / 3 * 2 - 4 * 2 / 4 + 1 ") === 19);
console.log(calculator("100 - 20 * 3 / 2 + 5 * 4 - 10 / 2 * 3") === 75);
// All test cases should log true.
        
        
        
/*
P
//////////////////////////////////////////////////////
input = string of numbers and operators, representing a valid arithmetic expression
return = integer

Rules:
  - input string:
    - may or may not contain spaces
    - won't contain parentheses
  - order of operations: mult & div before add & sub
  - dividing? use floor division (Math.floor)

E
//////////////////////////////////////////////////////
My examples & tests:
20 / 4 * 2 + 7, idx 1
5 * 2 + 7, idx 1
10 + 7, idx 1
17

*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- the expression must be fully parsed prior to evaluation, if you expect to be able to properly implement order of operations

v1 algo

  IDEAS
  - split into array of digits and operators.  Use regex to find:
    - [0-9]+
    - [+\-/*]{1}
    - WORKING REGEX: " 20 / 4 * 2 + 7".match(/[0-9]+|[+\-/*]{1}/g)
  - for each index between 0 and length of the array:
    - if an element is * or /:
      - HELPER: replace the element, and the elements on either side (total of 3 elements) with the product/ quotient of the two numbers using arr.proto.splice(start, end, newValue)
        - INPUT = 
          - array
          - index of operator
          - callback(left operand, right operand)
        - Side effect: mutate the array using .splice()
    - decrement idx by 1 (bc 3 elements have been replaced with 1)
  - for each element of the array:
    - if an element is + or -:
    - replace the element, and neighbors, with sum or difference of the two numbers
  - return the 0th element of the array
*/

// LS TESTS


// My solve
// less efficient than LS solution
function calculator(expression) {
  let tokens = expression.match(/[0-9]+|[+\-/*]{1}/g);
  // Run thru expression and execute multiplication & division first
  for (let i=0; i < tokens.length; i++) {
    if (tokens[i] === "*") {
      arrayCalc(tokens, i, (a, b) => a * b);
      i -= 1;
    } else if (tokens[i] === "/") {
      arrayCalc(tokens, i, (a, b) => Math.floor(a / b))
      i -= 1;
    }
  }
  // Then do addition / subtraction
  for (let i=0; i < tokens.length; i++) {
    if (tokens[i] === "+") {
      arrayCalc(tokens, i, (a, b) => a + b);
      i -= 1;
    } else if (tokens[i] === "-") {
      arrayCalc(tokens, i, (a, b) => a - b)
      i -= 1;
    }
  }
  // console.log(pieces)
  return tokens[0];
}

function arrayCalc(arr, idx, callback) {
  // mutate the `arr` argument
  // perform operation on operands to the left and right of the idx
  // replace all 3 elements with result of callback
  arr.splice(idx - 1, 3, callback(
      Number.parseInt(arr[idx - 1]), 
      Number.parseInt(arr[idx + 1])))
}

// let temp = ['1', '+', '1', '-', '99']
// arrayCalc(temp, 1, (l, r) => l + r)
// arrayCalc(temp, 1, (l, r) => l - r)
// console.log('temp = ', temp)



// LS solution
// SV comments
/* 
Turns out I overcomplicated the concept of 'respecting order of operations'
LS uses a stack:
- values after add/sub operators are PUSHED to the stack. 
- values after a subtraction operator are inverted (-1 * value)
- values after mult/div operators MODIFY the stack: the last value is removed and then
    combined with the current value as appropriate (mult or div).  In this way, 
    order of operations is respected.
- 
 */
function calculator(expression) {
  let stack = [];
  let num = '';
  // set first and last operators to `+`
  let op = '+';
  expression += '+';

  // Iterate through the string, one char at a time
  // Ignore spaces
  for (let i = 0; i < expression.length; i++) {
    const char = expression[i];
    // build the number, char by char.
    if (char >= '0' && char <= '9') {
      num += char;
    // if the char is an operator, you've reached the end of the number
    // operate on the current number with the PREVIOUS operator
    } else if (['+', '-', '*', '/'].includes(char)) {
      num = parseInt(num, 10);
      switch (op) {
        case '+':
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push(Math.trunc(stack.pop() / num));
          break;
      }
      // update the operator for the next iteration
      op = char;
      num = 0;
    }
  }

  return stack.reduce((a, b) => a + b, 0);
}