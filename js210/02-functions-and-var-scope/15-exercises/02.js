let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors);  // mutates colors to [red, green, blue, yellow]
console.log(colors);   // logged, see