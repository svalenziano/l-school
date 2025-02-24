/*
P
  GET 6 NUMBERS FROM THE USER AND LOG MESSAGE TO DESCRIBE
  IF 6TH NUMBER APPEARS AMONG THE FIRST 5

  INPUT: 6 numbers (input via shell prompt)
  OUTPUT: logged message 
E
D
A
*/

// EXAMPLES
/* 
Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].
 */



// MY SOLUTION
/* 
ALGO
  - let nums = []
  - repeat 6 times:
    - retrieve value from user and append onto `nums`
  - lastNum = splice the num from nums
  - if last num is a member of nums:
    - log message
  - else
    - log message
 */

const r = require('readline-sync')

// Add 'st', 'nd', 'rd', 'th' to number
function numTh(number) {
  if (typeof number === 'number') {
    number = String(number)
  }
  switch (number) {
    case 1:
      return number += 'st'
    case 2:
      return number += 'nd'
    case 3:
      return number += 'rd'
    default:
      return number += 'th'
  }
}

function getNums() {
  let nums = [];
  const REQUESTS = ['1st', '2nd', '3rd', '4th', '5th', 'last'];
  for (let nth of REQUESTS) {
    let num = Number(r.question(`Enter the ${nth} number: `))
    nums.push(num);
  }
  let lastNum = nums.splice(-1, 1)[0];
  let found = (nums.indexOf(lastNum) > -1);
  console.log()
  if (found) {
    console.log(`The number ${lastNum} appears in ${String(nums)}.`);
  } else {
    console.log(`The number ${lastNum} does not appear in ${String(nums)}.`);
  }
}

while (true) {
  getNums()
  console.log()
}
