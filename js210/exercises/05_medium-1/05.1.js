// what logs?

var counter = 5;
var rate = 3;
console.log('The total value is ' + String(counter * rate));

function counter(count) {
  // ...
}









// my solve
/* 
`counter` function is hoisted above `var` and is therefore shadowed by `var` counter
Logs:
  The total value is String(function * rate) -> error?
 */