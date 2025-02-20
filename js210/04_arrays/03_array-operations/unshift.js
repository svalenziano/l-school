

// tests
let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]


// my solve
function unshift(arr, element) {
  new_arr = [element];
  for (let ele of arr) {
    new_arr.push(ele)
  }
  for (let idx in new_arr) {
    arr[idx] = new_arr[idx];
  }
  return new_arr.length;
}
