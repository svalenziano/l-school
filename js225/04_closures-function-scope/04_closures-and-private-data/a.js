// "use strict";
/* 
My goal: create a doggo object with private data, without the use of a higher-order function
*/

function createDoggo(name) {
  let hobbies = [];
  return {
    name,
    addHobby(hobby) {
      hobbies.push(hobby);
    },
    printHobbies() {
      console.log(`\nI'm ${this.name} and my hobbies are:`);
      hobbies.forEach((i) => console.log(i));
    },
  };
}

// Usage
let hanna = createDoggo('Hanna');
let felix = createDoggo('Felix');

hanna.addHobby('Stick chewing');
hanna.addHobby('Stick chasing');
hanna.addHobby('Staring judgementally');

felix.addHobby('Prancing like a cloud');
felix.addHobby('Running away from Hanna');

[hanna, felix].forEach((i) => i.printHobbies());

/* 
I'm Hanna and my hobbies are:
Stick chewing
Stick chasing
Staring judgementally

I'm Felix and my hobbies are:
Prancing like a cloud
Running away from Hanna
*/