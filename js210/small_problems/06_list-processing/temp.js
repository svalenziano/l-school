const array1 = ["a", "b", "c"];
const iterator = array1.values();

for (let i = 0; i < 10; i++) {
  console.log(iterator.next());
}



// Expected output: "a"
// Expected output: "b"
// Expected output: "c"