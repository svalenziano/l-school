let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);  // mutate ... colors = [red, green], reassign global color to blue, return array
addColor(colors, color);  // mutate colors to [red, green, blue]
console.log(newColors);   // [red, grn, blue]