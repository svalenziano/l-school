// `var` or `let` puts variable in the module scope
// not added to the global object!
var foo = 'var'
let qux = 'let'

// without a declaration keyword, the variable is in the global scope
// and is added to the global object
bar = 'no declaration'

console.log(global.foo);
console.log(global.qux);
console.log(global.bar);

console.log(qux);
console.log(foo);
console.log(bar);