// Use "node moduleThis.js" to run this code

var foo = 'foo';
bar = 'bar';
let qux = 'qux';

console.log(this.foo);                // => undefined
console.log(this.bar);                // => undefined
console.log(this.qux);                // => undefined
console.dir(this);                    // => {}
console.dir(module.exports)           // => {}
console.log(this === module.exports)  // => true