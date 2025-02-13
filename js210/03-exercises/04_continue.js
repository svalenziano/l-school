

// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number (inclusive). All numbers should be logged on separate lines.

// logOddNumbers(19);

/* output on console
1
3
5
7
9
11
13
15
17
19
*/

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
  - use for loop to log numbers
*/

function logOddNumbers(num) {
  console.log(`num = ${num}`)
  for (let i = 1; i <= num; i += 1) {
    if (i % 2 === 0) {
      continue
    }
    console.log(i)
  }
}

logOddNumbers(0);
logOddNumbers(1);
logOddNumbers(3);
logOddNumbers(19);
