// INPUT = array
// output = array w duplicates removed



console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]


// my solve
/* 
P
E
D
A
- result = arr[0];
- for each element of the array
  - if elemeent is not a member of result
    - add ele to `result`
- return result

 */

function uniqueElements(arr) {
  if (arr.length <= 1) {
    return arr.slice();
  }
  let result = [arr[0]];
  for (let ele of arr) {
    if (result.indexOf(ele) === -1) {
      result.push(ele);
    }
  }
  return result;
}