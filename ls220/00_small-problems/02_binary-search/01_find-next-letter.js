
        
        
        
/*
P
//////////////////////////////////////////////////////
Given a sorted (ascending) array of lowercase letters, find the smallest letter in the array that's lexicographically greater than the second argument `key`, which is a single-letter string.

Input = ascending array of characters
Return = 
  - character: 
    - smallest char that's greater than `key`
    - if no match in the array, return the smallest char in the array

RULES:
  - duplicates may existin in the array



LS examples:
    console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');
    console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');
    console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');
    console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');
    console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f');
    console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');

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
- Use a binary search to find where the `key` character is, or would be
- While the next character is the same as the current character:
  - increment the pointer
- If the index is greater than the length minus 2
  - return the first element in the list
- else:
  - return the element to the right of the pointer


*/

function binarySearch(arr, ele) {
  let left = 0;
  let right = arr.length - 1
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === ele) {
      return mid;
    }
    if (arr[mid] < ele) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}

// Solution 1:
function findNextLetter(chars, key) {
  let keyIdx = binarySearch(chars, key)
  // make sure you're actually pointing towards the key char
  if (chars[keyIdx] !== key && keyIdx >= 0) {
    keyIdx--;
  }
  // find the rightmost match
  while (chars[keyIdx + 1] === key && chars[keyIdx + 1] === chars[keyIdx]) {
    keyIdx ++;
  }
  return chars[keyIdx + 1] ?? chars[0];
}

// Solution 2: fewer extraneous steps
// function findNextLetter(chars, key) {
  // tktk
// }



// LS TESTS
console.log(findNextLetter(['b', 'd', 'f'], 'a') === 'b');  // -1
console.log(findNextLetter(['b', 'd', 'f'], 'c') === 'd');  // 1
console.log(findNextLetter(['b', 'd', 'f'], 'f') === 'b');  // 2
console.log(findNextLetter(['a', 'a', 'b', 'c'], 'a') === 'b');  // 1 or 2
console.log(findNextLetter(['c', 'f', 'j'], 'c') === 'f'); // 0
console.log(findNextLetter(['a', 'c', 'f', 'h', 'i', 'j'], 'g') === 'h');  // 3
// All test cases should log true.


