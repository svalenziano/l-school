// objective: return the maximum index of the value that matches a given condition

function bsearchMax(iter, target) {
  let left = 0;
  let right = iter.length - 1;
  let match = -1;  // default return is -1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (iter[mid] === target) {
      // update match and keep searching to the right
      match = mid;
      left = mid + 1;
    } else if (iter[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return match;
}

// All tests should return true
console.log(bsearchMax([3, 4, 5], 2) === -1)
console.log(bsearchMax([2], 2) === 0)
console.log(bsearchMax([1, 2, 2, 3], 2) === 2)
console.log(bsearchMax([1, 2, 2, 3, 3, 3], 2) === 2)
console.log(bsearchMax([2, 2, 3, 3, 3, 4], 2) === 1)
console.log(bsearchMax([0, 1, 1, 1, 2, 2], 2) === 5)

function bsearchMin(iter, target) {
  let left = 0;
  let right = iter.length - 1;
  let match = -1;  // default return is -1
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (iter[mid] === target) {
      // update match and keep searching to the LEFT
      match = mid;
      right = mid - 1;  // 👈 this is the only difference from bsearchMax
    } else if (iter[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return match;
}

// All tests should return true
console.log(bsearchMin([3, 4, 5], 2) === -1)
console.log(bsearchMin([2], 2) === 0)
console.log(bsearchMin([1, 2, 2, 3], 2) === 1)
console.log(bsearchMin([1, 2, 2, 3, 3, 3], 2) === 1)
console.log(bsearchMin([2, 2, 3, 3, 3, 4], 2) === 0)
console.log(bsearchMin([0, 1, 1, 1, 2, 2], 2) === 4)

// function bsearchMaxWithCallback(iter, comparison) {
//   // iter = iterable such as an array or string
//   // comparison = callback that performs the comparison on the current index (mid)
//   let left = 0;
//   let right = iter.length - 1;
//   while (left <= right) {
//     let mid = Math.floor((left + right) / 2)
//     if 
//   }
// }