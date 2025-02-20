


// ls tests
let wins = {
  steve: 3,
  susie: 4,
};

incrementProperty(wins, 'susie');   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
incrementProperty(wins, 'lucy');    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }



// solve
function incrementProperty(object, propertyName) {
  if (!Object.hasOwn(object, propertyName)) {
    object[propertyName] = 1;
  } else {
    object[propertyName] += 1;
  }
  console.log(`object.${propertyName} = ${object[propertyName]}`)
}