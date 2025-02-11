let r = require('readline-sync')

let num1 = Number(r.question('Enter the first number\n'))
let num2 = Number(r.question('Enter the second number\n'))

console.log(`${num1} + ${num2} = ${num1 + num2}`)
console.log(`${num1} ** ${num2} = ${num1 ** num2}`)