/* 
Create a func that emulates the native Array.prototype.join 

Input = array, string
Return = string: array elements joined with the string
Side effects = none

 */


// tests
console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'


// my solve
/* 
P
E
D
A
  - result = ''
  - using for loop, iterate through all array elements
    - if last element is reached
      - Append the element and return
    - ELSE:
      - append the element AND the string
 */

 function join(array, string) {
  let result = '';
  for (let i = 0; i < array.length; i++) {
    if (i === array.length - 1) {
      return result + array[i];
    } else {
      result += (array[i] + string);
    }
  }
 }