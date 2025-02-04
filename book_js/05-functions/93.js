function weird_upper() {
  let r = require('readline-sync');
  let s = r.question("Gimme a string\n");
  return s.length > 10 ? s.toUpperCase() : s;
}

while (true) {
  console.log(weird_upper());
  console.log();
}