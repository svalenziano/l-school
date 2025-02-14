/*
P
  -   
  - Reqs: 
    - not a number? undefined
    - negative? undefined
    - times === 0? empty string
E
D
A
C

*/

function repeat(string, times) {
  console.log(`repeat(${string}, ${times})`)
  if (typeof times !== 'number') {
    result = undefined;
  } else if (times < 0) {
    result = undefined;
  } else if (times === 0) {
    result = '';
  } else {
    result = ''
    for (let i = 0; i < times; i++) {
      result += string
    }
  }
  console.log(result);
  return result;
}

repeat('abc', 1);       // "abc"
repeat('abc', 2);       // "abcabc"
repeat('abc', -1);      // undefined
repeat('abc', 0);       // ""
repeat('abc', 'a');     // undefined
repeat('abc', false);   // undefined
repeat('abc', null);    // undefined
repeat('abc', '  ');    // undefined