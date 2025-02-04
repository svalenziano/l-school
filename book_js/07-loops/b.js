let r = require('readline-sync')
let answer;
do {
  answer = r.question("Do you want to do that again? ")
} while (answer === 'y');