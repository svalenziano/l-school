// Fill in the weird underscore blanks so that the function works
// Output = bonus is half of salary if boolean is true, otherwise zero

// TESTS
function calculateBonus() {
  return _________[1] ? _________[0] / 2 : 0;
}

console.log(calculateBonus(2800, true));               // 1400
console.log(calculateBonus(1000, false));              // 0
console.log(calculateBonus(50000, true));              // 25000


// MY SOLUTION
function calculateBonus() {
  return arguments[1] ? arguments[0] / 2 : 0;
}


