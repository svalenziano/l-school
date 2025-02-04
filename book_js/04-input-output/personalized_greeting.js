let rlSync = require("readline-sync");
let num1 = rlSync.question("First number?\n");
let num2 = rlSync.question("Second number?\n");
let solution = Number(num1) + Number(num2);
console.log(solution)