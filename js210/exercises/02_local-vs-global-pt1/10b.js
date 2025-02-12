var logValue = 'foo';  // not hoisted any further (already at top)

function logValue() {  // hoisted to top
  console.log('Hello, world!');
}

console.log(typeof logValue);


/* new order:

function declaratoin
logValue
console log -> String

*/