/*
P
  INPUT = 2D array: grocery list
  RETURN = 1D array of strings.  Each fruit name is repeated as specified by the input array
E
D
A
*/

// TESTS
console.log(buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]));
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]


// MY SOLUTION
/* 
P
E
D
A
  - result = []
  - for each array element
    - use REPEATER and spread syntax to append 1 or more strings onto result
*/

function repeater(element, quantity) {
  let result = [];
  for (let i = 0; i < quantity; i++) {
    result.push(element);
  }
  return result;
}

function buyFruit(arrayOfFruits) {
  let result = [];
  arrayOfFruits.forEach((x) => result.push(...repeater(x[0], x[1])))
  return result
}