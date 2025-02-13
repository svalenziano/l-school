/*
P
E
D
A
  
  - result = 1
  - Find midpoint
  - For each num btw 2 and midpoint (inclusive)
    - if number is divisor of both num1 and num2
      - update result
  - return result
C
*/

function gcd(num1, num2) {
  let result = 1;
  let smaller = Math.min(num1, num2);
  // let midpoint = Math.floor(smaller / 2);
  for (let i = 2; i <= smaller; i++) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
    }
  }
  console.log(result)
}



gcd(12, 4);   // 4
gcd(15, 10);  // 5
gcd(9, 2);    // 1