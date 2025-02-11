let foo = {
  a: 'hello',
  b: 'world',
};

let qux = 'hello';

function bar(argument1, argument2) {
  argument1.a = 'hi';
  argument2 = 'hi';
}


bar(foo, qux);
// foo is mutated to {a: 'hi', b: 'world'}
// the global qux is NOT reassigned to 'hi' because in JS, primitives are pass-by-value

console.log(foo.a);
console.log(qux);

// ...hi...
// hello

