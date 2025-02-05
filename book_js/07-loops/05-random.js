function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/*
min = 0
max = 10
0.5 * (10 - 0 + 1) + 0
0.5 * 11 + 0
5.5

min = 0
max = 1
0.9 * (1 - 0 + 1) + 0
1
*/

let tries = 0;
let result = randomNumberBetween(1, 6);
tries += 1;

while (result <= 2) {
  result = randomNumberBetween(1, 6);
  tries += 1;
}

console.log('It took ' + String(tries) + ' tries to get a number greater than 2');