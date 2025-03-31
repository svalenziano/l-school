

function bsearchMinMax(iter, target, find='min') {
  // `find` must be 'min' or 'max'
  let left = 0;
  let right = iter.length - 1;
  let matchIdx = -1;  // default return is -1
  
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    
    if (iter[mid] === target) {
      matchIdx = mid;
      if (find === 'max') left = mid + 1;
      else if (find === 'min') right = mid - 1;
      else throw(new Error("Invalid argument for `find`"))

    } else if (iter[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return matchIdx;
}

// All tests should return true
console.log(bsearchMinMax([3, 4, 5], 2, 'max')          === -1)
console.log(bsearchMinMax([2], 2, 'max')                === 0)
console.log(bsearchMinMax([1, 2, 2, 3], 2, 'max')       === 2)
console.log(bsearchMinMax([1, 2, 2, 3, 3, 3], 2, 'max') === 2)
console.log(bsearchMinMax([2, 2, 3, 3, 3, 4], 2, 'max') === 1)
console.log(bsearchMinMax([0, 1, 1, 1, 2, 2], 2, 'max') === 5)

// All tests should return true
console.log(bsearchMinMax([3, 4, 5], 2, 'min')          === -1)
console.log(bsearchMinMax([2], 2, 'min')                === 0)
console.log(bsearchMinMax([1, 2, 2, 3], 2, 'min')       === 1)
console.log(bsearchMinMax([1, 2, 2, 3, 3, 3], 2, 'min') === 1)
console.log(bsearchMinMax([2, 2, 3, 3, 3, 4], 2, 'min') === 0)
console.log(bsearchMinMax([0, 1, 1, 1, 2, 2], 2, 'min') === 4)