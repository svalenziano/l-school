let a = 7;

function myValue(b) {  // create new local var
  b += 10;  // reassign local var
}

myValue(a);  // invoke myValue, passing `a` as an argument.  
console.log(a);  // 7