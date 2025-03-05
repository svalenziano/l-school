/* 
INPUT = string
RETURN = acronym representing first letter of each word
REQUIREMENTS:
  - String is split on any group of one or more non-alpha characters
  - acryonym is fully uppercase
  - 

 */



// tests

console.log(acronym('Portable Network Graphics'));                  // "PNG"
console.log(acronym('First In, First Out'));                        // "FIFO"
console.log(acronym('PHP: HyperText Preprocessor'));                // "PHP"
console.log(acronym('Complementary metal-oxide semiconductor'));    // "CMOS"
console.log(acronym('Hyper-text Markup Language'));                 // "HTML"



// my solve
function acronym(string) {
  let words = string.split(/[^a-zA-Z]+/);
  let letters = words.map((word) => word[0].toUpperCase());
  return letters.join('')
}
