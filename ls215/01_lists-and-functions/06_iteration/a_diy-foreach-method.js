/* 
myforEach
  INPUT = array and callback
  OUTPUT = none

callback
  SIDE EFFECT = reassign the `min` var from outer scope
 */

// function myForEach(array, func) {
//   // ...
// }

let min = Infinity;
let getMin = (value) => min = (value <= min ? value : min);
myForEach([4, 5, 12, 23, 3], getMin);
console.log(min);                        // 3





// my solve

/* 
Analyzing the callback
min = value <= min ? value : min

CASE 1
  min = Infinity
  value = 1
  min = value <= min -> min === true
  true ? true : Infinity
  returns true

 */

function myForEach(array, callback) {
  for (let i = 0; i < array.length; i += 1) {
    callback(array[i], i, array);
  }
}

