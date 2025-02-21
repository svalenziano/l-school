//  Convert a num to a string the good ol fashioned way



// tests
console.log(integerToString(4321));      // "4321"
console.log(integerToString(0));         // "0"
console.log(integerToString(5000));      // "5000"


// My solve
/* 
P
E
  4321
    Math.floor(x / 1000) === 4
    x % 1000 === 321

  4321
    x / 10 = 432.1
    x % 10 = 1

  43



D
A
  create DIVMOD helper function
    - return array = [floor of division operation, remainder]

  digits = ''
  while Math.floor(num / 10) is greater than 0:
    Remove rightmost digit with num % 10 and append to `digits`
    Update `num` to Math.floor(num/10)

  use do-while loop

  return digits

*/

function integerToString(num) {
  let digits = '';
  let getLeftmostDigits = (x) => Math.floor(x / 10)
  while (getLeftmostDigits(num) > 10) {
    digits = (num % 10) + digits;
    num = getLeftmostDigits(num)
  }
  return String(num) + digits
}