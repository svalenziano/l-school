var myVar = 'This is global';

function someFunction() {
  var myVar = 'This is local';  // decleare and init local var that shadows global var
  console.log(myVar);  // This is local
}

someFunction();