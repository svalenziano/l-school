/* 
REQUIREMENTS
Same as 03, but accepts arbitrary number of values
 */




 // LS TESTS
concat([1, 2, 3], [4, 5, 6], [7, 8, 9]);    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
concat([1, 2], 'a', ['one', 'two']);        // [1, 2, "a", "one", "two"]
concat([1, 2], ['three'], 4);               // [1, 2, "three", 4]



// my solve
/* 
P
E
D
A
*/

function concat(...values) {
  let newArray = [];
  
  for (let value of values) {
    if (!Array.isArray(value)) {
      newArray.push(value);
    } else {
      for (let ele of value) {
        newArray.push(ele);
      }
    }
  }
  console.log(newArray)
  return newArray;
}