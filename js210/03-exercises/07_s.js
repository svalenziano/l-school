// Write a function that iterates over the integers from 1 to 100, inclusive. For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz". For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.

// Your output should look like this:

fizzbuzz();

// // console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// // … rest of output omitted for brevity

/*
P
  - mult of 3, log Fizz
  - mult of 5, log Buzz
  - mult of both 3 and 5, log FizzBuzz
  - otherwise, log the number
E
D
A
  - for each integer btw 1 and 100
    - if multiple of 3
      - log fizz
    - if multiple of 5
      - log Buzz
    - if both multiple of 3 and 5
      - log fizBuzz
    - else
      -log number
C
*/

function fizzbuzz() {
  for (let i=1; i<= 100; i++) {
    multOf3 = i % 3 === 0;
    multOf5 = i % 5 === 0;
    if (multOf3 && multOf5) {
      console.log("FizzBuzz");
    } else if (multOf3) {
      console.log('Fizz');
    } else if (multOf5) {
      console.log('Buzz');
    } else {
      console.log(i);
    }
  }
}
