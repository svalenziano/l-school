function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// LS stuff
// let tries = 0;
// let result = randomNumberBetween(1, 6);
// tries += 1;

// while (result <= 2) {
//   result = randomNumberBetween(1, 6);
//   tries += 1;
// }
// end ls stuff

let TRIALS = 6;

let tries = 0;
let result = [];
for (let i=0; i < TRIALS; i++){
  tries = 0
  do {
    result.push(randomNumberBetween(1, 6));
    tries += 1;
  } while (result <= 2);
}

for (let i=0; i < result.length; i++) {
  console.log('It took ' + String(result[i]) + ' tries to get a number greater than 2');
}