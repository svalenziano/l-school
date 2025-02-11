let myArray = [
  [1, 3, 6, 11],
  [4, 2, 4],
  [9, 17, 16, 0],
];

for (let o=0; o < myArray.length; o++) {
  innerLength = myArray[o].length
  for (let i=0; i < innerLength; i++) {
    ele = myArray[o][i]
    if (ele % 2 === 0) {
      console.log(ele)
    }
  }
}