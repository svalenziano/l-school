"use strict";
/* 

Grading areas and weights
Exam = 65%
Exercises = 35%

Terms
  - 4 exams
  - X exercises (varies)

Exercises
  - max score: varies
  - counts: varies
  - it appears that if you get a perfect score
    on all exercises, your total exercise score
    will be 100

Exams
  - max score of 100%

Student grade:
  - exams: average the scores
  - sum exercise scores
  - apply weights
  - round to nearest integer
  - determine letter grade

INPUT = studentScores object
RETURN = class record summary object

*/


// TESTS
let studentScores = {
  student1: {
    id: 123456789,
    scores: {
      exams: [90, 95, 100, 80],
      exercises: [20, 15, 10, 19, 15],
    },
  },
  student2: {
    id: 123456799,
    scores: {
      exams: [50, 70, 90, 100],
      exercises: [0, 15, 20, 15, 15],
    },
  },
  student3: {
    id: 123457789,
    scores: {
      exams: [88, 87, 88, 89],
      exercises: [10, 20, 10, 19, 18],
    },
  },
  student4: {
    id: 112233445,
    scores: {
      exams: [100, 100, 100, 100],
      exercises: [10, 15, 10, 10, 15],
    },
  },
  student5: {
    id: 112233446,
    scores: {
      exams: [50, 80, 60, 90],
      exercises: [10, 0, 10, 10, 0],
    },
  },
};



generateClassRecordSummary(studentScores);

// returns:
/* 
{
  studentGrades: [ '87 (B)', '73 (D)', '84 (C)', '86 (B)', '56 (F)' ],
  exams: [
    { average: 75.6, minimum: 50, maximum: 100 },
    { average: 86.4, minimum: 70, maximum: 100 },
    { average: 87.6, minimum: 60, maximum: 100 },
    { average: 91.8, minimum: 80, maximum: 100 },
  ],
}
 */





/* 

MY SOLVE


P
  - See top
E
  Hypothetical student (from example)
    Exams: (90 + 80 + 95 + 71) / 4 = 84 exam grade

D
  ARRAY
  grades = array of strings


  ARRAY
  exams (array of exam objects, see below)

    OBJECT (one per exam)
    exam {
      grades = Array of ints, eg [90, 80, 50, 99, 58]
      average = undefined
      minimum = undefined
      max = undefined
    }

A
  v1 high level
    - for each student:
      - determine numeric and letter grade
        - append that value (as string)
          onto the `grades` array
      - for each exam (index 0 thru 3)
        - append exam grade to exams[index][grades]
    - for each exam:
      - reduce scores to average, minimum, and maximum
      - cleanup: remove the `grades` array
*/

function getStudentScore(studentObject) {
  // Input: student grades, eg:   
  //   { exams: [ 90, 95, 100, 80 ], exercises: [ 20, 15, 10, 19, 15 ] }
  // Output: string describing numeric and letter grade, eg "87 (B)"
}

function getExamSummary(examGradesArray) {
  // Input: array of exam grades for one student.  4 ints, 1 column per int.
  // Output: array of 4 objects
  //   Each object describes the stats for each of 4 exams
  /* 
  algo
    - transpose matrix (helper)
      - rows are now per-exam scores!
    - for each row
      - get average using `reduce`
      - get max using Math.max
      - get min using Math.min
      - append object to array
    - 
  */

  function transposeMatrix(matrix) {
    /* 
    result = []
    Get length of first array
    For each index (each column)
      row = []
      Append the index-th element onto the row
      append row onto result
    return result
    */
  }

}

function generateClassRecordSummary(scores) {
  // extract score data (disregarding id's)
  let scoreData = Object.keys(scores).map((studentKey) => scores[studentKey]['scores'])  // scores[studentKey][scores]
  console.log(scoreData)
  // extract exam data (disregarding exercise scores)
  let examData = scoreData.map((scoreObject) => scoreObject['exams'])
  console.log(examData)

  return {
    studentGrades: scoreData.map((scores) => getStudentScore(scores)),
    exams: getExamSummary(examData),  
  }
}