function myMap(array, func) {
  // ...
}

let plusOne = n => n + 1;
result = myMap([1, 2, 3, 4], plusOne);       // [ 2, 3, 4, 5 ]
console.log(result);


// my solve
/* 
input = array, callback
output = new array.  each element transformed with callback

 */

function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(callback(array[i], i, array))
  }
  return result
}
