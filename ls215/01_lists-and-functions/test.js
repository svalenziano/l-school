function titleCase(string) {
  return string.replace(
    /([^\W_]+[^\s-]*) */g, 
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

// All tests print 'true'
console.log(titleCase("i can't do this") === "I Can't Do This")
console.log(titleCase("hello jim-bob") === "Hello Jim-Bob")
console.log(titleCase("maria von trapp") === "Maria Von Trapp")