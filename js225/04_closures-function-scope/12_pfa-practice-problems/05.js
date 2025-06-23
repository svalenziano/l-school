let subjects = {
  English: ['Bob', 'Tyrone', 'Lizzy'],
  Math: ['Fatima', 'Gary', 'Susan'],
  Biology: ['Jack', 'Sarah', 'Tanya'],
};

function rollCall(subject, students) {
  console.log(subject + ':');
  students.forEach(function(student) {
    console.log(student);
  });
}

function makeMathRollCall() {
  // implement this function...
}

let mathRollCall = makeMathRollCall();
mathRollCall(subjects['Math']);
// => Math:
// => Fatima
// => Gary
// => Susan



// my solve
function makeMathRollCall() {
  /* 
  RETURNED FUNCTION:
    Input = array
    Return = none
    Output = execute rollCall function from outer scope

  Algo:
    - Return a function 
  */
  return function(studentsArray) {
    rollCall('Math', studentsArray)
  }
}