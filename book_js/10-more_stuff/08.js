/*
Divide num by 0
If result is Infinity
  return false
Else (result is NaN)
  return True
*/

function isNotANumber(num) {
  return num / 0 === Infinity ? false : true
}

console.log(isNotANumber(1));
console.log(isNotANumber(NaN));