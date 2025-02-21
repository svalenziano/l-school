//what prints and why?

let counter = 5;
let rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));



// my solution
/* 
JS throws error when we attempt to redeclare `counter` using `let`
NO HOISTING OCCURS: SyntaxErrors occur prior to hoisting.
Execution stops before log.

*/