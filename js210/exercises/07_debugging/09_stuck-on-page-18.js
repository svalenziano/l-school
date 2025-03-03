const totalPages = 364;
let energy = 100;

function read() {
  let currentPage = 1;
  while (currentPage < totalPages) {
    while (energy > 0) {
      currentPage += 1;
      energy -= (5 + currentPage * 0.1);
    }
    console.log(`Made it to page ${String(currentPage)}.`);
    // Drink a cup of coffee.
    energy = 100;
  }
  console.log('Done!')
}


read();


/* 

MY ALGO

While current page < total pages
  while energy > 0:
    - increment pages
    - decrement energy
    - print status
  - drink coffee
- print 'done!'
 */