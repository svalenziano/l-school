let rlSync = require('readline-sync');
let fname = rlSync.question("What's your first name?\n");
let lname = rlSync.question("What's your last name?\n");
console.log(`Hello, ${fname} ${lname}!`)