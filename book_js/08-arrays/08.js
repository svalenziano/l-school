let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.reduce(function(accum, currentVal) {
    if (currentVal.length % 2 !== 0) {
      accum.push(currentVal.length);
      return accum
    } else {
      return accum;
    }
  }, currentValue=[]);
}