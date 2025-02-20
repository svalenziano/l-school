const r = require('readline-sync')

let length = r.question("Enter the length of the room in meters: ")
let width = r.question("Enter the width of the room in meters: ")
let area = length * width
let area_imperial = (area * 10.7639).toFixed(2);

console.log(`The area of the room is ${area} square meters (${area_imperial} \
square feet)`)