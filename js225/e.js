function makePartialFunc(func, b) {
  return (a) => {
    return func(a, b);
  };
}

let error = makePartialFunc(console.log, "SO SAD.");
error("I lost my pen.");
// I lost my pen. SO SAD.