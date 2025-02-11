let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  let lengths = arr.map(ele => ele.length);
  let odds = lengths.filter(ele => ele % 2 !== 0);
  return odds;
}