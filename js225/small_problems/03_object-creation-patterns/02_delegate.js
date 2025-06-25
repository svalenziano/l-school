'use strict';

function Person(fname, lname, age, gender) {
  this.fname = fname;
  this.lname = lname;
  this.age = age;
  this.gender = gender;
}

Person.prototype = {
  fullName() {
    return this.fname + ' ' + this.lname;
  },
  communicate() {
    console.log('Helooooooo');
  },
  eat() {
    console.log('Yummmm');
  },
  sleep() {
    console.log('ZZZZZzzzzzzz');
  },
};

Person.prototype.constructor = Person;

function Doctor(fname, lname, age, gender, specialization) {
  super(fname, lname, age, gender);
  this.specialization = specialization;
}

Doctor.prototype = Object.create(Person.prototype)

Doctor.prototype.diagnose = function diagnose() {
  console.log("It's not a tumor!");
}

Doctor.prototype.constructor = Doctor;


function Professor(fname, lname, age, gender, subject) {
  super(fname, lname, age, gender);
  this.subject = subject;
}

Professor.prototype = Object.create(Person.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.teach = function teach() {
  console.log("Here's some knowledge ya'll.");
}


function Student(fname, lname, age, gender, degree) {
  super(fname, lname, age, gender);
  this.degree = degree;
}

Student.prototype = Object.create(Person);
Student.prototype.constructor = Student;

Student.prototype.study = () => console.log("Head down, keep on studying.");



function GraduateStudent(fname, lname, age, gender, degree, graduateDegree) {
  super(fname, lname, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudent.prototype = Object.create(Student);
GraduateStudent.prototype.constructor = GraduateStudent;

GraduateStudent.prototype.reseach = () => console.log("Oh wow, look at this!");



