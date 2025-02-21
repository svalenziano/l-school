// what prints and why?

var counter = 5;
var rate = 3;

function counter(count) {
  // ...
}

console.log('The total value is ' + String(counter * rate));






// my answer

/* 
function is hoisted to the top
`var counter` shadows `function counter`
counter = 5 when `log` is invoked
logged: The total value is 15
 */