'use strict';



/*
P
//////////////////////////////////////////////////////


E
//////////////////////////////////////////////////////
My examples & tests:
*/

/*


D
//////////////////////////////////////////////////////


A
//////////////////////////////////////////////////////


*/

// LS TESTS


function myFilter(array, func) {
  const result = [];

  array.forEach(value => {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}

const filter = {
  allowedValues: [5, 6, 9],
};

myFilter([2, 1, 3, 4, 5, 6, 12], function(val) {
  return this.allowedValues.includes(val);
}, filter); // returns [5, 6]
