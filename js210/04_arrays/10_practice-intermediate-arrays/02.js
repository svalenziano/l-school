/* 
Function
  - Input = array
  - Return = array.  Contains all original elements + elements in reverse order
  - Side effects = none
 */


// test
let digits = [4, 8, 15, 16, 23, 42];
console.log(weird(digits));


// my solve
function weird(array) {
  return array.concat(array.slice().reverse())
}