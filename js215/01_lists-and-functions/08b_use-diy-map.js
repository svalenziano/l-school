function myMap(array, callback) {
  let result = [];
  for (let i = 0; i < array.length; i += 1) {
    result.push(callback(array[i], i, array))
  }
  return result
}


function getBooksTitle(books) {
  // ...
}

let books = [
  {
    title: 'JavaScript and JQuery: Interactive Front-End Web Development',
    author: 'Jon Ducket',
    edition: '1st',
  },
  {
    title: 'Eloquent JavaScript: A Modern Introduction to Programming',
    author: 'Haverbeke',
    edition: '2nd',
  },
  {
    title: "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics",
    author: 'Jennifer Niederst Robbins',
    edition: '4th',
  },
];

function getTitle(book) {
  return book['title'];
}

getBooksTitle(books);
// console output
[
  "JavaScript and JQuery: Interactive Front-End Web Development",
  "Eloquent JavaScript: A Modern Introduction to Programming",
  "Learning Web Design: A Beginner's Guide to HTML, CSS, JavaScript, and Web Graphics"
]

function getBooksTitle(books) {
  console.log(myMap(books, getTitle))
}