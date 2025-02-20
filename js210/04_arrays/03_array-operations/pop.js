
// tests
let count = [1, 2, 3];
console.log(pop(count));
console.log(count);

// my solve
function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }
  lastValue = arr[arr.length - 1];
  arr.length = arr.length - 1;
  return lastValue;
}