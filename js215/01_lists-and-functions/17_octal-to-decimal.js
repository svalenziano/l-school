/* 
P
  - input = number as string 
  - return = decimal value of input number

*/

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9




/* 
MY SOLUTION

E
    233                          // octal
  = 2*8^2 + 3*8^1 + 3*8^0
  = 2*64  + 3*8   + 3*1
  = 128   + 24    + 3
  = 155                          // decimal
D
A
  - MAKE ARRAY OF POWERS (HELPER)
    - Create sequence of powers starting from 0 to the length of the array, minus one
      - reverse that sequence

  - Convert string into array
  - Map to array of integers
  - Map to octal value of each digit
    - power = powers[index]
    - multiply the array element by 8 ** power (8 raised to power)
  - REDUCE: Return sum of digits



*/

function range(length) {
  let arr = [];
  for (let i = 0; i < length; i += 1) {
    arr.push(i);
  }
  return arr;
}

// console.log(range(10))

function octalToDecimal(numberString) {
  let digits = numberString.split('').map((x) => Number.parseInt(x));
  let powers = range(numberString.length).reverse();
  // console.log('digits=', digits, ' powers=', powers)
  
  return digits.reduce((accum, x, idx) => {
    // console.log('x=', x, ' idx = ', idx)
    return accum + x * (8 ** powers[idx])
    }, 0);
}



/* 

examining the ls solution

ALTERNATIVE METHOD OF GENERATING REVERSED INDICES
string =  '1234'
indices =  3210
powers
numberString.length - index - 1
4 - 0 - 1 = 3
4 - 1 - 1 = 2


*/