/*
P
E
D
A
*/

// TESTS



// MY SOLUTION
const r = require('readline-sync')
let age = r.question('What is your age? ')
let retireAge = r.question('At what age would you like to retire? ')
let remaining = retireAge - age;

let now = new Date(Date.now())
let year = now.getFullYear()
console.log(`It's ${year}.  You will retire in ${year + remaining}.`)
console.log(`You have only ${remaining} years of work to go!`)