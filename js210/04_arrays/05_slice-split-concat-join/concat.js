/* 
Create function that simulates the `Array.prototype.concat` method

Input = array1, array2
Return = new array, result of concatenating 1 and 2
Side ffects = none

 */

// test
console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]


// my solve
/* 
P
E
D
A
  - create new array
  - create list of arrays (1 and 2)
  - for array in listOfArrays
    - for element in array
      - append to newArray
 */

 function concat(array1, array2) {
  let newArray = [];
  let arrays = [array1, array2];
  for (let array of arrays) {
    for (let element of array) {
      push(newArray, element)
    }
  }
  return newArray
 }

 function push(arr, element) {
  let lastIndex = arr.length - 1;
  arr[lastIndex + 1] = element;
  return arr.length
}

