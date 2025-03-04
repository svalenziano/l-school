let tests = [
  [
    [1,1,1,1,1,],
    [2,2,2,2,2,],
    [3,3,3,3,3,],
  ],
  [
    [1,1],
    [2,2],
  ],
  [
    [1],
    [2],
    [3],
    [4],
  ],
];

for (let test in tests) {
  console.log(transpose(test))
}

function transpose(array) {
  return array[0].map((col, columnIdx) => {  // transform first row in array: for each column index:
    return array.map(row => row[columnIdx]); 
  });
}