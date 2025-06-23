/* 
My goal: create a doggo object with private data, without the use of a higher-order function
*/

function createDoggo(name) {
  hobbies = [];
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

// Oh no!  Looks like both hanna and felix reference the same `hobbies` array!
