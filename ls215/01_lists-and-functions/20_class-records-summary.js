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




function getStudentScore(studentObject) {
  // Input: student grades, eg:   
  //   { exams: [ 90, 95, 100, 80 ], exercises: [ 20, 15, 10, 19, 15 ] }
  // Output: string describing numeric and letter grade, eg "87 (B)"
  const EXAM_WEIGHT = 0.65;
  const EXERCISE_WEIGHT = 0.35;
  let examScore = average(studentObject['exams']);
  let exerciseScore = sum(studentObject['exercises']);
  let finalScore = (
    (examScore * EXAM_WEIGHT) + (exerciseScore * EXERCISE_WEIGHT));
  finalScore = Math.round(finalScore);
  let letterGrade = getLetterGrade(finalScore);
  return `${finalScore} ${letterGrade}`;
}

function getLetterGrade(numericScore) {
  if (numericScore >= 93) {
    return 'A';
  } else if (numericScore >= 85) {
    return 'B';
  } else if (numericScore >= 77) {
    return 'C';
  } else if (numericScore >= 69) {
    return 'D';
  } else if (numericScore >= 60) {
    return 'E';
  } else {
    return 'F';
  }
}


function getExamSummary(examGradesArray) {
  // Input: array of exam grades for one student.  4 ints, 1 column per int.
  // Output: array of 4 objects
  //   Each object describes the stats for each of 4 exams
  //   eg: { average: 75.6, minimum: 50, maximum: 100 }
  // Transpose so that each row represents scores for a single exam
  examGradesArray = transpose(examGradesArray);
  let result = [];
  for (let i = 0; i < examGradesArray.length; i++) {
    result[i] = {
      average: average(examGradesArray[i]),
      minimum: Math.min(...examGradesArray[i]),
      maximum: Math.max(...examGradesArray[i]),
    }
  }
  return result;
}

function average(array) {
  return sum(array) / array.length;
}

function sum(array) {
  return array.reduce((accum, ele) => accum + ele, 0);
}

function transpose(matrix) {
  let newMatrix = [];
  for (let col = 0; col < matrix[0].length; col++) {
    newMatrix[col] = [];
    for (let row = 0; row < matrix.length; row++) {
      newMatrix[col][row] = matrix[row][col];
    }
  }
  return newMatrix;
}


function generateClassRecordSummary(scores) {
  // extract score data (disregarding id's)
  let scoreData = Object.keys(scores).map((studentKey) => scores[studentKey]['scores'])  // scores[studentKey][scores]
  // extract exam data (disregarding exercise scores)
  let examData = scoreData.map((scoreObject) => scoreObject['exams'])

  return {
    studentGrades: scoreData.map((scores) => getStudentScore(scores)),
    exams: getExamSummary(examData),  
  }
}

console.log(generateClassRecordSummary(studentScores))