/*
P
   input = string
   output = string.  Each char is repeated 2x
E
D
A
*/

// TESTS
console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""


// MY SOLUTION
function repeater(stringToDouble) {
  let chars = stringToDouble.split('');
  let doubledChars = chars.map((x) => x + x)
  return doubledChars.join('');
}

