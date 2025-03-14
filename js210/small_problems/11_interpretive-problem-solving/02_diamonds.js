/*
P
  INPUT = odd integer
  RETURN = none
  OUTPUT = 4-pointed diamond, see examples (logged to console)
E
D
A
*/

// TESTS
diamond(1);
diamond(3);
diamond(9);


// MY SOLUTION
/* 
P
==================================
  INPUT = odd integer
  RETURN = none
  OUTPUT = 4-pointed diamond, see examples (logged to console)

Reqs / rules:
  - output is `n` lines long
  - lines are `n` characters long
  - stars are centered within the line
  - num of stars increased by 2 on each line, until reaching `n` wide,
      at which point, decreased by 2
  - 

E
==================================
diamond(9);
// logs
0 / 1 / 1     *
1 / 2 / 2    ***
2 / 3 / 3   *****
3 / 4 / 4  *******
4 / 5 / 5 *********   // 9 WIDE
5 / 6 / 1  *******
6 / 7 / 2   *****
7 / 8 / 3    ***
8 / 9 / 4     *         // 9 tall

D
==================================
array of strings

A
==================================

HIGH LEVEL:
  - `result` = []
  - `wider` = true -> tracks if the diamond is getting wider or not
  - `numStars` = 1
  - for each line between 1 and `n`:
    - append line using HELPER(`numStars`)
    - if the numStars contains `n` stars, reverse `wider`
    - increment `numStars` (up or down)
      - if wider = true:
        - increment + 2
      - else:
        - decrement by 2

HELPER
- construct string
  - INPUT = 
      integer = num of stars
      integer = line length
  - OUTPUT = string = stars padded with spaces
  - Algo
    - whitespace = lineLength - numStars;
    - padding = ' ' * whitespace / 2
    - stars = '*' * numStars
*/

function centeredStars(lineLength, numStars) {
  let whitespaceLength = lineLength - numStars;
  let padding = ' '.repeat(whitespaceLength / 2);
  let stars = '*'.repeat(numStars);
  return padding + stars + padding;
}

// console.log(centeredStars(9, 1));
// console.log(centeredStars(9, 3));
// console.log(centeredStars(9, 5));
// console.log(centeredStars(9, 7));
// console.log(centeredStars(9, 9));

function diamond(diamondSize) {
  let result = [];
  let numStars = 1;
  let increment = 2
  for (let line = numStars; line <= diamondSize; line++) {
    result.push(centeredStars(diamondSize, numStars));
    if (numStars === diamondSize) increment *= -1;
    numStars += increment;
  }
  result.forEach((x) => console.log(x))
}