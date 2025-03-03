/* 
P
  INPUT = array of objects
  OUTPUT = array of objects
    - Dots (periods) are moved from band names
    - `country` property set to 'Canada'
    - `name` capitalized (title case)


*/






let bands = [
  { name: 'sunset rubdown', country: 'UK', active: false },
  { name: 'women', country: 'Germany', active: false },
  { name: 'a silver mt. zion', country: 'Spain', active: true },
];

function processBands(data) {
  // ...
}

console.log(processBands(bands));
console.log(bands); // sv added this print to make sure the original was not mutated

// should return:
[
  { name: 'Sunset Rubdown', country: 'Canada', active: false },
  { name: 'Women', country: 'Canada', active: false },
  { name: 'A Silver Mt Zion', country: 'Canada', active: true },
]


/* 
E
D
A
  - MAP name property -> to Capitalized name AND remove dots/periods
  - MAP country -> 'Canada'
*/

function titleCase(string) {
  return string.replace(
    /([^\W_]+[^\s-]*) */g, 
    (text) => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
  );
}

function removeDots(string) {
  return string.replace('.', '');
}

function processBands(listOfBands) {
  return listOfBands.map((band) => {
    let newBand = structuredClone(band)
    newBand.name = removeDots(band.name);
    newBand.name = titleCase(newBand.name);
    newBand.country = 'Canada';
    return newBand;
  });
}