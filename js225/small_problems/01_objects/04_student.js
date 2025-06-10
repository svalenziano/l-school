'use strict';



/*
PROBLEM DESCRIPTION

Write an object factory function `createStudent`

Requirements:
- info() logs the name and year of the student: "Foo is a 1st year student" 
- addCourse(obj) enrolls a student in a course.  Input = object with `name` and `code` properties
- listCourses() returns array of courses (objects) the student is enrolled in
- addNote(code, note) adds a `note` property to the course with code === code.  If the note already exists, append the new note to the existing note.
- updateNote(code, note) replaces the existing note with the new note
- viewNotes() prints all notes for all courses, ignoring courses that lack notes 

*/

// LS TESTS
let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"







// My solve
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    // LS doesn't use these two maps
    courseNames: new Map(),
    notes: new Map(),

    info() {
      console.log(`${this.name} is a ${this.year} student`);
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
      this.courseNames.set(courseObj.code, courseObj.name)
    },

    listCourses() {
      console.log(this.courses)
    },

    // LS diff: they check to see if the course is valid
    addNote(code, note) {
      /* 
      Input = code (int), note (str)
      Return = none
      SE = 
        - store note in a object. Key = code. Value = note text
        - If note already exists, append note to existing note w/ semicolon delimiter
       */
      let n = this.notes;
      if (!n.has(code)) {
        this.updateNote(code, note);
      } else {
        n.set(code, n.get(code) + "; " + note);
      }
    },

    // LS diff: they iterate through all *courses*, while my solve iterates through all *notes*
    viewNotes() {
      console.log()
      this.notes.forEach((val) => console.log(val))
    },

    // LS diff: they check to see if the course exists
    updateNote(code, note) {
      let coursename = this.courseNames.get(code)
      this.notes.set(code, `${coursename}: ${note}`);
    },
  }
}