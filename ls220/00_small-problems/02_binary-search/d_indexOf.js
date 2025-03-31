function binaryIndexOf(iter, target) {
  // returns first index of `target` within `iter`
  let left = 0;
  let right = target.length - 1;
  let matchIdx = -1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (iter[mid] === target) {
      matchIdx = mid;
      right = 
    }
  }
}