function subtract(a, b) {
  return a - b;
}

function makeSub() {
  // implement this function using partial function application
}

const sub5 = makeSub();

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15




/// my solve

// first try
function makeSub() {
  return subtract.bind(null, b=5);
}

// second try
function makeSub() {
  return (num1) => {
    return subtract(num1, 5)
  }
}