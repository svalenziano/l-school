/*
Algo
Get 3 scores from user
  - create empty array
  - for loop (repeat 3x)
    - prompt for score
    - append score to array
Average the scores using Math.avg
Determine letter grade (helper)
  - if else block
    - if avg score is greater than threshold
    - return letter grade
Log message to console
*/


function getScores(num) {
  let scores = [];
  for (let i=0; i < num; i++) {
    let score = Number(prompt(`Enter score ${i + 1} of ${num}:`));
    scores.push(score);
  }
  return scores // returns array
}

function getLetterGrade(score) {
  if (score >= 90) {
    return 'A';
  } else if (score >= 70) {
    return 'B';
  } else if (score >= 50) {
    return 'C';
  } else {
    return 'F'
  }
}

function average(arr) {
  sum = arr.reduce( (accum, num) => accum + num)
  return sum / arr.length
}

function main() {
  const NUM_SCORES = 3;
  let scores = getScores(NUM_SCORES);
  let avg = average(scores)  // loa make an average function using reduce?
  let letterGrade = getLetterGrade(avg)
  console.log(`Your average is ${avg},',
    which means your letter grade is ${letterGrade}`)
}

main()