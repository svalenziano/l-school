/* 
REQUIREMENTS
- arg 1 = array
- arg2 = array or other value
- RETURN = NEW ARRAY
  - order is preserved
  - copy object references (shallow copy).  Chnages to input arrays after calling
    concat method will be reflected in output array
  - copy VALUES of primitives
 */




 // LS TESTS
 function concat(array1, secondArgument) {
  // ...
}

concat([1, 2, 3], [4, 5, 6]);          // [1, 2, 3, 4, 5, 6]
concat([1, 2], 3);                     // [1, 2, 3]
concat([2, 3], ['two', 'three']);      // [2, 3, "two", "three"]
concat([2, 3], 'four');                // [2, 3, "four"]


const obj = { a: 2, b: 3 };
const newArray = concat([2, 3], obj);
newArray;                              // [2, 3, { a: 2, b: 3 }]
obj.a = 'two';
newArray;                              // [2, 3, { a: "two", b: 3 }]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, obj];
const arr3 = concat(arr1, arr2);
arr3;                                  // [1, 2, 3, 4, 5, { a: "two", b: 3 }]
obj.b = 'three';
console.log(arr3);                                  // [1, 2, 3, 4, 5, { a: "two", b: "three" }]

arr3[5].b = 3;                         // or, `arr3[5]['b'] = 3;`
console.log(obj);                                   // { a: "two", b: 3 }



// my solve
/* 
P
E
D
A
  - newArray = []
  - if secondArg is not an array
    - concat that object onto array1
  - ELSE (second arg is an array)
    - iterate through each element in second arg
      - append element onto newArray
*/

function concat(array1, secondArg) {
  let newArray = [...array1];
  if (!Array.isArray(secondArg)) {
    newArray.push(secondArg);
  } else {
    for (let ele of secondArg) {
      newArray.push(ele);
    }
  }
  console.log(newArray)
  return newArray;
}