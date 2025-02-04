function multiply(left,right) {
  return Number(left) * Number(right);
}

let r = require('readline-sync');
let left = r.question("Enter the first number: ");
let right = r.question("Enter the second number: ");
console.log(`${left} * ${right} = ${multiply(left, right)}`);