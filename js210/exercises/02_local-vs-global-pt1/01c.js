var myVar = 'This is global';

function someFunction() {
  let myVar = 'This is local';
}

someFunction();  
console.log(myVar); 