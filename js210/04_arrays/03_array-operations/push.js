


// example
let count = [0, 1, 2];
console.log(push(count, 3));         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]



// my solve
function push(arr, element) {
  let lastIndex = arr.length - 1;
  arr[lastIndex + 1] = element;
  return arr.length
}