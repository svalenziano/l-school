let a = [1, 2, 3];  

function myValue(b) {  // create local var, point it towards same array as global `a`
  b[2] += 7;  // reassign last element in myValue 3 -> 10
}

myValue(a);
console.log(a);  // [1, 2, 10]