/* 
P
  input = array
  output = new array, each element is a multiple of 3 or 5

 */

function multiplesOfThreeOrFive(values) {
  // ...
}

function isMultipleOfThreeOrFive(value) {
  return value % 5 === 0 || value % 3 === 0;
}

let result = multiplesOfThreeOrFive([1, 3, 5, 7, 11, 18, 16, 15]);  // [ 3, 5, 18, 15 ]
console.log(result)



// my solve
function multiplesOfThreeOrFive(array) {
  return array.filter(isMultipleOfThreeOrFive);
}