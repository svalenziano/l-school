


// tests
shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"


/*
P
E
D
A
  - create [short, long] array
  - if short.length > long.length:
    - reverse the array
  - output the short long short string (concatenate)
*/
function shortLongShort(str1, str2) {
  let short = str1;
  let long = str2;
  if (short.length > long.length) {
    [short, long] = [long, short];
  }
  console.log(short + long + short);

}