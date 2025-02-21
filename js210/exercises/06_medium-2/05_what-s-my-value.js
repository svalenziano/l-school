// what logs and why?

const array = ['Apples', 'Peaches', 'Grapes'];

array[3.4] = 'Oranges';
console.log(array.length);
console.log(Object.keys(array).length);

array[-2] = 'Watermelon';
console.log(array.length);
console.log(Object.keys(array).length);



/* 
My solve


array[3.4] creates new property (not an indexed item)
logs:
  3
  4

array[-2] created another property
logs:
  3
  5


*/