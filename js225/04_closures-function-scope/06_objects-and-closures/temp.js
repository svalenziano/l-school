let doggo = { name: "Hanna" };
let descriptors = Object.getOwnPropertyDescriptor(doggo, 'name');

console.log(JSON.stringify(descriptors))
// {"value":"Hanna", "writable":true, "enumerable":true, "configurable":true}