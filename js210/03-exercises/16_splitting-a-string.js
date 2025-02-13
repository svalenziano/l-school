/*
P
  Input
    1) string to be split
    2) delimiter
  Output:
    For each segment of the split string, print the segment on it's own line
  Return:
    None
  Requirements:
    - Ignore trailing delimiters
    - 
E
D
A
*/



// LS TESTS
splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// logs:
// ERROR: No delimiter

splitString('hello', '');
// logs:
// h
// e
// l
// l
// o

splitString('hello', ';');
// logs:
// hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello