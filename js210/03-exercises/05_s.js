// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5. If the number is divisible by both 3 and 5, append an "!" to the number.

multiplesOfThreeAndFive();

// output on console
'3'
'5'
'6'
'9'
'10'
'12'
'15!'
// … remainder of output omitted for brevity

/* 
Algo
- For each integer between 1 and 100 inclusive
  - If num is multiple of either 3 or 5:
    - If number is multiple of both 3 and 5:
      - log with excalamation
    - Else
      - log the number
*/
function isMultiple(numToTest, divisor) {
  return numToTest % divisor === 0;
}

function multiplesOfThreeAndFive() {
  for (let i=1; i <= 100; i++) {
    if (isMultiple(i, 3) || isMultiple(i, 5)) {
      if (isMultiple(i, 3) && isMultiple(i, 5)) {
        console.log(`${i}!`)
      } else {
        console.log(i)
      }
    }
  }
}