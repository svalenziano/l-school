// my solution (flawed)
function quicksortPartition(arr) {
  const PIVOT_IDX = 0;
  let pivotValue = arr[PIVOT_IDX];
  let left = 1;
  let right = arr.length - 1;

  while (true) {
    while (left < arr.length) {
      if (arr[left] >= pivotValue) break;
      left++;
    }
    while (right > PIVOT_IDX) {
      if (arr[right] < pivotValue) break;
      right--;
    }
    if (left > right) break;

    // swap left and right values
    [arr[left], arr[right]] = [arr[right], arr[left]];
  }
  // swap pivot with right
  [arr[PIVOT_IDX], arr[right]] = [arr[right], arr[PIVOT_IDX]];
}

// ls solution
function partition(arr) {
  const pivot = arr[0];
  let left = 1;
  let right = arr.length - 1;

  while (left <= right) {
    while (left <= right && arr[left] < pivot) {
      left++;
    }

    while (left <= right && arr[right] >= pivot) {
      right--;
    }

    if (left < right) {
      // Swap values at left and right pointers
      [arr[left], arr[right]] = [arr[right], arr[left]];
    }
  }

  // Swap pivot with the element at the right pointer
  [arr[0], arr[right]] = [arr[right], arr[0]];

  // Return modified array
  return arr;
}


let a = [7, 3, 9, 8, 5, 1];
quicksortPartition(a)
console.log(a)

let b = [3, 2];
quicksortPartition(b);
console.log(b)