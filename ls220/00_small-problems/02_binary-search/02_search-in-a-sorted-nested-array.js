
        
        
        
/*
P
//////////////////////////////////////////////////////
Given an ascending-sorted nested array (each subarray containing sorted ascending integers), and an integer called `target` return a boolean value that indicates if the `target` is a member of the array.

RULES
  - Time complexity should be O(log(M*N))
  

LS TESTS
    console.log(findInNestedArray([[4, 8, 12], [16, 20, 24], [28, 32, 36]], 20) === true);
    console.log(findInNestedArray([[3, 6, 9], [12, 15, 18], [21, 24, 27]], 27) === true);
    console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
    console.log(findInNestedArray([[1, 3, 5], [7, 9, 11], [13, 15, 17]], 19) === false);
    console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);

// All test cases should return true.


// MY RULES
    - the array that contains the target (if it exists) will start with a number that's <= `target`

E
//////////////////////////////////////////////////////
My examples & tests:
*/
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 86) === false);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 16) === false);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 46) === false);

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////
- Conduct a binary search for the array
  - while left > right:
    - select middle element
    - if smallest ele is greater than target, shift window left
    - else if largest ele is less than target, shift window right
    - else if smallest ele is <= target and greatest ele is >= target:
      - select that array and conduct another binary search within the array
        - return true or false
  - return false

*/

function includes(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return true;
    else if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}

function findInNestedArray(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    let currentArray = arr[mid];
    if (currentArray[0] > target) right = mid - 1;
    else if (currentArray[currentArray.length - 1] < target) left = mid + 1;
    else if (
      currentArray[0] <= target && 
      currentArray[currentArray.length - 1] >= target) {
        return includes(currentArray, target);
    }
  }
  return false;
}



// LS TESTS
console.log(findInNestedArray([[4, 8, 12],   [16, 20, 24], [28, 32, 36]], 20) === true);
console.log(findInNestedArray([[3, 6, 9],    [12, 15, 18], [21, 24, 27]], 27) === true);
console.log(findInNestedArray([[10, 20, 30], [40, 50, 60], [70, 80, 90]], 10) === true);
console.log(findInNestedArray([[1, 3, 5],    [7, 9, 11],   [13, 15, 17]], 19) === false);
console.log(findInNestedArray([[15, 25, 35], [45, 55, 65], [75, 85, 95]], 5) === false);


