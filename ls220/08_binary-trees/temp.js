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
my solve

IDEA:
  - put `+` at beginning of string to ensure the first iteration works properly
  - cur = 0 (pointer)
  - (while pointer < string.length) iterate through the input string, pushing sums to a stack
    - while pointer is pointing at a non-arithmetic operator
      - increment the pointer
    - operator = char at pointer
    - while pointer isn't pointing at a number:
      - increment the pointer
    - number = ""
    - while pointer is still pointing at a number:
      - number += char
      - increment the pointer
    - evaluate the expression (using operator & number):
      - Addition? Push the number, as-is
      - Subtraction? Push the number * -1
      - Multiplication? Pop the previous number, multiply it with the current number, then push the result
      - Division? Pop the prev number, divide by curent num using FLOOR DIVISION, push the result
  - return sum of the stack (using `reduce`)
*/

function calculator(str) {
  str = '+' + str;
  let stack = []
  let pointer = 0;
  let isNumeral = () => arr[pointer] >= 0 && arr[pointer] <= 9
  while (pointer < str.length) {
    // find the next operator
    while (!["+", "-", "/", "*"].includes(str[pointer])) {
      pointer += 1;
    }
    let operator = str[pointer];
    // Find the next numeral
    while (!isNumeral()) {
      pointer += 1
    }
    let number = 0;
    while (isNumeral()) {
      number = number * 10 + parseInt(str[pointer], 10);
      pointer += 1;
    }

    switch (operator) {
      case "+":
        stack.push(number);
        break;
      case "-":
        stack.push(number * -1);
        break;
      case "/":
        stack.push(Math.floor(stack.pop() / number));
        break;
      case "*":
        stack.push(stack.pop() * number)
        break;
    }
  }
  return stack.reduce((accum, ele) => accum + ele)
}