
// find max index of of 3
let conditionCallback = (i) => i === 3;

console.log(bsearchMax([2, 2, 3, 3, 3, 4], conditionCallback) === 4)

function bsearchMax(iter, condition) {
  let left = 0;
  let right = iter.length - 1;

  while (left < right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (condition(mid)) {
      left = mid;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

