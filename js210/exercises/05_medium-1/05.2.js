

/// what logs?

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));

var counter = 5;
var rate = 3;






// my solve
/* 
functions are hoisted to the top
var counter overwrites `function counter`, but is uninitialized when `log` is called

logs: Total value is NaN

 */