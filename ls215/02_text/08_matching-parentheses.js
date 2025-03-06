

/* 
INPUT = string
OUTPUT = boolean ... are all parentheses matched?

*/




// tests
console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false


/* 
MY SOLUTION

E
  Simplified test cases
  '()'   true
  '(())' true
  ')('   false
  '(()'  false
  '())'  false

  CRITERIA:
    - equal number of '(' and ')'
    - first '(' occurs before first ')'

ALGO:
  - V1 - THIS ALGO FAILS TO CATCH '())'
    - unclosed = 0;
    - for each character of the string:
      - if character === (:
        - increment unclosed
      - if character === ) and unclosed > 0:
        - decrement unclosed
    - return unclosed === 0

  - v2 
    - return equalParentheses(string) && validClosingParentheses
*/

function isBalanced(string) {
  // HELPER FUNCTIONS
  function countCharater(string, char) {
    let count =  string.split('').reduce((count, c) => count + (c === char), 0)
    return count
  }
  function openingPrecedesClosing(string) {
    return string.indexOf('(') < string.indexOf(')');
  }
  function closingSucceedsOpening(string) {
    return string.lastIndexOf(')') > string.lastIndexOf('(');
  }
  
  // MAIN LOGIC
  let balanced = countCharater(string, '(') === countCharater(string, ')');
  return (
    balanced 
    && openingPrecedesClosing(string) 
    && closingSucceedsOpening(string)
    );
}