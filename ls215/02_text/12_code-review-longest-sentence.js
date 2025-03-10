"use strict";


/* 
P
  input = string
  output = log to console = the longest sentence
  REQUIREMENTS
    - SENTENCES
      - Sentences end with '.', '!', or '?'
      - Those sentence-ending chars are PART OF THE SENTENCE!
      - LONGEST SENTENCE = the largest number of words
    - WORDS
      - Word characters: 'any character other than ' ', '.', '!', or '?'.  
      - This includes: '--'
      - Words are delimited by one or more spaces
  QUESTIONS
    - hyphenated words - count as one?
E
  
D
  List of sentence objects:
    [ {sentence 1}, {sent 2}, ... ]

  Sentence object:
    {original: 'four score and seven ...', words: ['four', 'score', 'and', ... ]}
A
  v1 high level
    Split into list of sentences
    Split each sentence into list of words
    Sort sentences by length (number of words)
    Return longest sentence, joined by spaces.

  v2 high level
    This algo is a little more robust?  
      - Uses original sentence, preserving doubled spaces or other shenanigans
      - Words array isn't polluted with punctuation
    - (Split and map) Splt string into list of sentence objects
    - (map) Add list of words, using regex 'match' with global flag
    - Sort the list by length of each object's ['words'] key
    - return the longest ['original']
*/


// MY SOLUTION


// MAIN FUNCTION

function longestSentence(string) {
  const SENTENCE_PATTERN = /\s*([^.!?]+[.!?])/g;
  let sentences = Array.from(string.matchAll(SENTENCE_PATTERN), (x) => x[1]);
  
  if (sentences.length > 0) {
    let longest = sentences.sort(sortByWordCount)[0];
    console.log(`Longest sentence: "${longest}"`);
    console.log(`The longest sentence has ${wordCount(longest)} words.\n---`);
  } else {
    console.log(`"${string}"\nI cannot provide a word count because no `
      + `sentence-ending punctuation was found in the provided text, \n---`);
  }
}


// HELPER FUNCTIONS

function wordCount(sentence) {
  const WORD_PATTERN = /[^. !?\n]+/g;
  return sentence.match(WORD_PATTERN).length;
}

function sortByWordCount(sentence1, sentence2) {
  return wordCount(sentence2) - wordCount(sentence1);  // descending order
}






// EXAMPLE
let longText = 'Four score and seven years ago our fathers brought forth' +
  ' on this continent a new nation, conceived in liberty, and' +
  ' dedicated to the proposition that all men are created' +
  ' equal.' +
  ' Now we are engaged in a great civil war, testing whether' +
  ' that nation, or any nation so conceived and so dedicated,' +
  ' can long endure. We are met on a great battlefield of that' +
  ' war. We have come to dedicate a portion of that field, as' +
  ' a final resting place for those who here gave their lives' +
  ' that that nation might live. It is altogether fitting and' +
  ' proper that we should do this.' +
  ' But, in a larger sense, we can not dedicate, we can not' +
  ' consecrate, we can not hallow this ground. The brave' +
  ' men, living and dead, who struggled here, have' +
  ' consecrated it, far above our poor power to add or' +
  ' detract. The world will little note, nor long remember' +
  ' what we say here, but it can never forget what they' +
  ' did here. It is for us the living, rather, to be dedicated' +
  ' here to the unfinished work which they who fought' +
  ' here have thus far so nobly advanced. It is rather for' +
  ' us to be here dedicated to the great task remaining' +
  ' before us -- that from these honored dead we take' +
  ' increased devotion to that cause for which they gave' +
  ' the last full measure of devotion -- that we here highly' +
  ' resolve that these dead shall not have died in vain' +
  ' -- that this nation, under God, shall have a new birth' +
  ' of freedom -- and that government of the people, by' +
  ' the people, for the people, shall not perish from the' +
  ' earth.';



longestSentence(longText);

longestSentence("To be or not to be? The brown fox is superlative!");
longestSentence("I! Ow.     Boo hiss.")
longestSentence("Hello \n world!")  // todo
longestSentence("Hello world! I said hello!")
longestSentence("bleep bloop")
longestSentence("I")
longestSentence("")
// console output
//It is rather for us to be here dedicated to the great task remaining before us -- that from these honored dead we take increased devotion to that cause for which they gave the last full measure of devotion -- that we here highly resolve that these dead shall not have died in vain -- that this nation, under God, shall have a new birth of freedom -- and that government of the people, by the people, for the people, shall not perish from the earth.

//The longest sentence has 86 words.


// Assuming the last sentence is removed:

// nextLongestSentence(longText);

// console output
//Four score and seven years ago our fathers brought forth on this continent a new nation, conceived in liberty, and dedicated to the proposition that all men are created equal.

//The longest sentence has 30 words.


