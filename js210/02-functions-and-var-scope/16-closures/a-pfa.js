function makeAdder(num1) {
  function adder(num2) {
    return num1 + num2;
  }
  return adder;
}

add1 = makeAdder(1);
add10 = makeAdder(10);

console.log(add1(1));
console.log(add1(99));

console.log(add10(1));