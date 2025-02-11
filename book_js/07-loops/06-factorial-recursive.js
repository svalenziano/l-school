/*
What is a factorial?

factorial(1) -> 1
factorial(2) -> 1 * 2
    num * factorial(num - 1)
factorial(5) -> 1 * 2 * 3 * 4 * 5
    num

Base case = 1
*/

function factorial(num) {
  if (num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

for (let i=1; i<=8; i++) {
  console.log(factorial(i));
}