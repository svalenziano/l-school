let a = 7;

function myValue(a) {  // new local var
  a += 10;  // reassign local var
}

myValue(a); // invoke myValue, passing the integer 7 as the arg
console.log(a); // 7