/*
Use binary search to find the index of the first or last instance of a value.  Tests should print true.


*/

/* 
MY SOLVE

Under what circumstances do you search left?  And right?

Insight: there are two differences in how you approach the `findFirst` and `findLast` problems.

DIFFERENCE 1:
  What you do when the value at `mid` equals `target`?

  Find leftmost
    [1, 1, 2, 3]
    Search left?  If arr[mid] >= target: r = mid - 1
    Search right? If arr[mid] < target:  l = mid + 1

  Find rightmost
    [1, 1, 2, 3]
    Search left?  If arr[mid] > target:  r = mid - 1
    Search right? If arr[mid] <= target: l = mid + 1

DIFFERENCE 2:
  What value do you return?

  Find leftmost = return `l` pointer!
    [1, 1, 2, 3]
     ^  ^     ^
     l  m     r    arr[mid] >= target: r = mid - 1;



    [1, 1, 2, 3]
     ^^
     lrm  (l, r, and mid are all at 0)  arr[mid] >= target: r = mid - 1

    [1, 1, 2, 3]
   ^ ^
   r l

    Since we search for the `leftmost` target value by moving the right pointer, the final position of `l` will be the leftmost index of the target.  
  
  Find rightmost
    Conversely, the final  position of `r` represents the rightmost index of `target`.  Let's take it from the start:
    [1, 1, 2, 3]
     ^  ^     ^
     l  m     r    arr[mid] <= target: l = mid + 1

    [1, 1, 2, 3]
          ^^  ^
          lm  r    arr[mid] > target: r = mid - 1

    [1, 1, 2, 3]
        ^  ^  
        r  l      r has moved left of l, return r

  🔴🔴🔴🔴 just stop being slick and use a targetIdx!!!
*/


// First
// console.log(first([1], 1) === 0);
// console.log(first([1, 1, 1, 2, 2, 4], 1) === 0);
// console.log(first([1, 1, 1, 2, 2, 4], 2) === 3);
// console.log(first([1, 1, 1, 2, 2, 4], 4) === 5);

// Last
console.log(last([1], 1) === 0);
console.log(last([1, 1, 1, 2, 2, 4], 1) === 2);
console.log(last([1, 1, 1, 2, 2, 4], 2) === 4);
console.log(last([1, 1, 1, 2, 2, 4], 4) === 5);
console.log(last([1, 1, 2, 3], 1) === 1);


function first(arr, target) {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    if (arr[mid] >= target) {
      r = mid - 1; // search left
    } else {
      l = mid + 1;  // search right
    }
  }
  return l;
}

function last(arr, target) {
  console.log(arr, target)
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let mid = Math.floor((l + r) / 2);
    // console.log(l, r, mid)
    if (arr[mid] > target) {
      r = mid - 1;  // search right
    } else {
      l = mid + 1
    }
  }
  return r;
}
