/* 
SENTIMENT ANALYSIS

Sentiment score = positive word count minus negative word count
*/





// EXAMPLE
let textExcerpt = 'To be or not to be-that is the question:\n' +
  'Whether \'tis nobler in the mind to suffer\n' +
  'The slings and arrows of outrageous fortune,\n' +
  'Or to take arms against a sea of troubles,\n' +
  'And, by opposing, end them. To die, to sleep-\n' +
  'No more-and by a sleep to say we end\n' +
  'The heartache and the thousand natural shocks\n' +
  'That flesh is heir to-\'tis a consummation\n' +
  'Devoutly to be wished. To die, to sleep-\n' +
  'To sleep, perchance to dream. Aye, there\'s the rub,\n' +
  'For in that sleep of death what dreams may come,\n' +
  'When we have shuffled off this mortal coil,\n' +
  'Must give us pause. There\'s the respect\n' +
  'That makes calamity of so long life.\n' +
  'For who would bear the whips and scorns of time,\n' +
  'Th\' oppressor\'s wrong, the proud man\'s contumely, [F: poor]\n' +
  'The pangs of despised love, the law’s delay, [F: disprized]\n' +
  'The insolence of office, and the spurns\n' +
  'That patient merit of the unworthy takes,\n' +
  'When he himself might his quietus make\n' +
  'With a bare bodkin? Who would fardels bear, [F: these Fardels]\n' +
  'To grunt and sweat under a weary life,\n' +
  'But that the dread of something after death,\n' +
  'The undiscovered country from whose bourn\n' +
  'No traveler returns, puzzles the will\n' +
  'And makes us rather bear those ills we have\n' +
  'Than fly to others that we know not of?\n' +
  'Thus conscience does make cowards of us all,\n' +
  'And thus the native hue of resolution\n' +
  'Is sicklied o\'er with the pale cast of thought,\n' +
  'And enterprises of great pitch and moment, [F: pith]\n' +
  'With this regard their currents turn awry, [F: away]\n' +
  'And lose the name of action.-Soft you now,\n' +
  'The fair Ophelia.-Nymph, in thy orisons\n' +
  'Be all my sins remembered';

let positiveWords = ['fortune', 'dream', 'love', 'respect', 'patience', 'devout', 'noble', 'resolution'];
let negativeWords = ['die', 'heartache', 'death', 'despise', 'scorn', 'weary', 'trouble', 'oppress'];

sentiment(textExcerpt);

// console output
/* 
There are 5 positive words in the text.
Positive sentiments: fortune, dream, respect, love, resolution

There are 6 negative words in the text.
Negative sentiments: die, heartache, die, death, weary, death

The sentiment of the text is Negative.
*/


/* 
MY SOLUTION

E
D
A
  - split text into words
  - for each word in the text
    - if positive (if the word starts with one of the words in the positive array) (use 'some')
      - increment positiveCounter
      - append to positiveList
    - if negative
      - increment negativeCounter
      - append to negativeList
  - generate output string and log to console
*/

// HELPER FUNCTIONS
function isPositive(word, positiveWordsList) {
  return positiveWordsList.some((w) => word.startsWith(w));
}

function isNegative(word, negativeWordsList) {
  return negativeWordsList.some((w) => word.startsWith(w));
}

function getWords(string) {
  return string.split(/[\s]/)
    .map((word) => word.toLowerCase())
    .map((word) => word.match(/[a-z]+/)[0])  // remove punctuation, get only the first alphabetic chars
}

// MAIN FUNCTION 
function sentiment(text) {
  let negativeList = [];
  let positiveList = [];

  let words = getWords(text)
  
  for (let word of words) {
    if (isPositive(word, positiveWords)) {
      positiveList.push(word);
    } else if (isNegative(word, negativeWords)) {
      negativeList.push(word);
    }
  }

  let positiveCounter = positiveList.length; 
  let negativeCounter = negativeList.length;
  let sentiment = (positiveCounter > negativeCounter) ? 'Positive' : 'Negative'

  console.log(
    `There are ${positiveCounter} positive words in the text.\n` +
    `Positive sentiments: ${positiveList.join(', ')}\n` +
    `\n` +
    `There are ${negativeCounter} negative words in the text.\n` +
    `Negative sentiments: ${negativeList.join(', ')}\n` +
    `\n` +
    `The sentiment of the text is ${sentiment}.\n`
  )
}