// Can divide by the number and determin if num === -Infinity

function isNegativeZero(num) {
  return (num === 0) && (1 / num === -Infinity);
}

console.log(isNegativeZero(0));
console.log(isNegativeZero(-1));
console.log(isNegativeZero(-0));