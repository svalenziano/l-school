/* 
Return:
  - string with all non-alpha letters replaced with spaces
  - multiple spaces should be condense to one
  
*/


// LS test
cleanUp("---what's my +*& line?");    // " what s my line "


// my solve
/* 
  - Replace non-alpha with space
  - Replace multiple spaces with single space
*/
function cleanUp(string) {
  string = string.replace(/[^a-zA-Z ]/g, ' ')
  string = string.replace(/[ ]+/g, ' ')
  console.log(string)
}