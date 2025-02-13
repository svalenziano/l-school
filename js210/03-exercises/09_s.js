

isXor(false, true);     // true
isXor(true, false);     // true
isXor(false, false);    // false
isXor(true, true);      // false


isXor(false, 3);        // true
isXor('a', undefined);  // true
isXor(null, '');        // false
isXor('2', 23);         // false


/*
Create an isXor function

ALGO
- if both values are falsy, return false
- if both values are truthy, return false
- else, return true
*/

function isXor(val1, val2) {
  if (!!val1 === !!val2) {
    return false
  }
  return true
}

function isXor(val1, val2) {
  if (!!val1 === !!val2) {
    console.log('false')
    return false
  }
  console.log('true')
  return true
}