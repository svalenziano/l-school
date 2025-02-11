let myProtoObj = {
  foo: 1,
  bar: 2,
};
let myObj = Object.create(myProtoObj);
myObj.qux = 3;


// Snippet 1
// let keys = Object.keys(myObj)
// keys.forEach(key => console.log(key))


// Snippet 2
// for (let i in myObj) {
//   console.log(i)
// }

// Snippet 3
for (let key in myObj) {
  if (myObj.hasOwnProperty(key)) {
    console.log(key)
  }
}