/*
P
E
D
A
*/

// TESTS
const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.


// MY SOLUTION
function makeDoubler(name) {
  function doubler(num) {
    console.log(`This function was called by ${name}.`)
    return num * 2;
  }
  return doubler;
}

