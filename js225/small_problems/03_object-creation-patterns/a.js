// The scope of `fname` can be determined
// simply by reading the code
function Doggo(fname) {
  this.fname = fname;
}

Doggo.prototype.getName = function() {
  // The value of `this` can only be determined by executing the code
  console.log(this.fname);
}

let h = new Doggo('Hanna');
let f = new Doggo('Felix');

let doggos = [h, f];
let randomIndex = Math.round(Math.random());

// The execution context of `getName` can only be determined
// by executing the code
doggos[randomIndex].getName();