function foo() {
  console.log('Waiting for bar!');
}

function foo() {
  function bar() {
    console.log('bar again');
  }
  function bar() {
    console.log('bar again and again');
  }
  
  console.log(foo);
  bar();

}
console.log(foo());

// [Function, foo]
// bar again and again
// [undefined]l