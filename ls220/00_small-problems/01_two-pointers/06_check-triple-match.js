
        
        
        
/*
P
//////////////////////////////////////////////////////
Given an ordered array of integers, determine whether or not (return boolean) any two distinct integers in that array are scaled in a ratio of 1:3.  Put another way, one of the elements should be exactly 3 times the value of the other element.


LS Examples:
    console.log(checkTripleMatch([1, 3, 9, 28]) === true);
    console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
    console.log(checkTripleMatch([0, 5, 7, 55]) === false);
    console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
    console.log(checkTripleMatch([2, 6, 13, 54]) === true);
    console.log(checkTripleMatch([1, 5, 17, 51]) === true);
    console.log(checkTripleMatch([1, 2, 4, 8]) === false);

    // All test cases should log true.


E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////


*/


function checkTripleMatch(arr) {
  let right = arr.length - 1;
  let left = right - 1;
  while (left >= 0) {
    if (left === right) {
      left--;
      continue;
    }
    if (arr[right] === arr[left] * 3) {
      return true;
    }
    if (arr[right] > arr[left] * 3) {
      right--;
      continue;
    }
    if (arr[right] < arr[left] * 3) {
      left--;
      continue;
    }
  }
  return false;
}


// LS TESTS

console.log(checkTripleMatch([1, 2, 4, 8]) === false);
console.log(checkTripleMatch([1, 2, 4, 10, 11, 12]) === true);
console.log(checkTripleMatch([0, 5, 7, 55]) === false);
console.log(checkTripleMatch([1, 3, 9, 28]) === true);
console.log(checkTripleMatch([1, 5, 17, 51]) === true);
console.log(checkTripleMatch([4, 5, 7, 9, 13, 15, 17]) === true);
console.log(checkTripleMatch([2, 6, 13, 54]) === true);

// All test cases should log true.

