let names = ['bob', 'joe', 'steve', undefined, 'frank'];
names.forEach(name => {
  console.log(`${name}'s name has ${name.length} letters in it.`);
}); // => bob's name has 3 letters in it.
    //    joe's name has 3 letters in it.
    //    steve's name has 5 letters in it.
    //    TypeError: Cannot read property 'length' of undefined
    //        at names.forEach (repl:2:42)
    //        at Array.forEach (<anonymous>)