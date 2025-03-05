"use strict";
// 01

let firstName = 'Steven'
let lastName = 'Valenz'
let fullName = [firstName, lastName].join(' ');
console.log(fullName);


// 02
console.log(firstName.concat(' >> ', lastName))

// 03
let names = fullName.split(/\s+/);
console.log(names)

// 04
let language = 'JavaScript'
let idx = language.indexOf('S')
console.log(idx);


// 05 and 06
let charCode = language.charCodeAt(idx)
console.log(charCode, ', aka: \'', String.fromCharCode(charCode), "'")


// 07
console.log(language.lastIndexOf('a'))

// 08
let a = 'a';
let b = 'b';
console.log(a < b);
b = 'B'
console.log(a < b);

// 09
console.log(language.slice(1, 4))
console.log(language.slice(2, 4))

// 10
console.log(language.substring(1, 4))
console.log(language.substring(2, 4))

// 11
console.log(language.slice(1, -1))  // expect 'avaScrip'
console.log(language.slice(2, -1))  // expect 'vaScrip'

// 12
console.log(language.substring(1, -1))  // I expect: 'J' (args are re-ordered.  -1 idx is interpreted as being before 0.  Interpreted as [0: 1] slice)
console.log(language.substring(2, -1))  // I expect: 'Ja' (intepreted as [0:2] slice)

// 13
let fact1 = 'JavaScipt is fun'
let fact2 = 'Kids like it too';
let combine = (a, b) => a + ' and ' + b[0].toLowerCase() + b.slice(1)
let compoundSentence = combine(fact1, fact2)
console.log(compoundSentence)

// 14
console.log(fact1[0]);
console.log(fact2[0]);

//15
let pi = 22 / 7;
console.log(pi.toString())
console.log(pi.toString().lastIndexOf('14'))

// 16
let boxNumber = 356..toString()
console.log(boxNumber)

// 17
console.log(boxNumber, 'is a', typeof boxNumber)
boxNumber = Number.parseInt(boxNumber);
console.log(boxNumber, 'is a', typeof boxNumber)

// 18
const r = require('readline-sync');
let myName = r.question('What is your name? ');
if (myName.endsWith('!')) {
  console.log(`HELLO ${myName.toUpperCase()}. WHY ARE WE SCREAMING?`);
} else {
  console.log(`Hello ${myName.slice(0, -1)}`);
}