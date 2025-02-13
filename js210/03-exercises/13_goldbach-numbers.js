
/*
P
  - Input = expectedSum (integer)
  - Output:
    - if num is even and greater than or equal to 4
      - log every pair of prime numbers that SUM to the number supplied as an argument
    - else, log `null`
  - Return: none
E
D
A
  - For every `num` between 1 and `expectedSum` (non-inclusive):
    - If `num` is prime:
      - `complement` = `expectedSum` minus `num`
      - if `complement` is prime:
        - AWESOME! log `num` and `complement`
C
*/

function isPrime(num) {
  if (num > 2 && num % 2 === 0) {
    return false
  }
  // Num is divisible by only 1 and itself
  let midpoint = Math.floor(num / 2)
  for (let i = 2; i <= midpoint; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function checkGoldbach(expectedSum) {
  console.log(`checkGoldback(${expectedSum})`)
  let found = false;
  let midpoint = Math.floor(expectedSum / 2)
  for (let num = 2; num <= midpoint; num ++) {
    if (isPrime(num)) {
      let complement = expectedSum - num;
      if (isPrime(complement)) {
        found = true;
        console.log(num, complement)
      }
    }
  }
  if (!found) {
    console.log('null')
  }
}

checkGoldbach(3);
// logs: null

checkGoldbach(4);
// logs: 2 2

checkGoldbach(12);
// logs: 5 7

checkGoldbach(100);
// logs:
// 3 97
// 11 89
// 17 83
// 29 71
// 41 59
// 47 53