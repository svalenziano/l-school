


/*
PEDAC

P

Examples
0 -> null
1 -> 1
2 -> 1
3 -> 1, 3
19 -> 1, 3, ... 19

Data structure
just an integer and a while loop?

Algo
  - if num < 1, return null
  - if num === 1, log 1, return 1
  - if num is even, recursive call num - 1
  - otherwise, recursive call num - 2
*/

function logOddNumbers(num) {
  if (num < 1) {
    return null;
  } else if (num === 1) {
    console.log(1);
    
  } else if (num % 2 === 0) {
    logOddNumbers(num - 1);
  } else {
    logOddNumbers(num - 2);
  }
}

logOddNumbers(19);
