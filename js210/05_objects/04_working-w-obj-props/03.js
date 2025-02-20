/* 
Write function:
- Input = two objects
- SIDE EFFECT = Copy all properties from first object to the second
- Return = number of properties copied
*/



// LS tests
let hal = {
  model: 9000,
  enabled: true,
};

let sal = {};
console.log(copyProperties(hal, sal));  // 2
console.log(sal);                       // { model: 9000, enabled: true }


// my solve
/* 
ALGO
- for each property in obj1
- create property in obj2

*/
function copyProperties(obj1, obj2) {
  let copied = 0;
  for (let key in obj1) {
    let value = obj1[key];
    obj2[key] = value;
    copied += 1;
  }
  return copied;
}