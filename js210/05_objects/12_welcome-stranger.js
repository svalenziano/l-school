



// LS test
greetings(['John', 'Q', 'Doe'], { title: 'Master', occupation: 'Plumber' });

// expected console output
// Hello, John Q Doe! Nice to have a Master Plumber around.


// my solve
function greetings(name, info) {
  name = name.join(' ');
  console.log(`Hello, ${name}! Nice to have a ${info.title} ${info.occupation} around.`)
}