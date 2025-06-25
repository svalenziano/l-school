class Animal {
  #fname;  // private field declaration
  
  constructor(fname, cute=false) {
    this.#fname = fname;  // private field
    Animal.instances.push(this);
    if (cute) Animal.#cuteInstances.push(this);
  }

  static instances = [];   // static property
  static #cuteInstances = []; // private static property (?)

  static #rollCallHelper(collection) {     // private static method (?)
    console.log(`${this.name}s: ${collection  // this = class constructor
      .map((i) => i.fname)
      .join(', ')}`)
  }

  static rollCall() {
    console.log(this instanceof Animal)
    this.#rollCallHelper(this.instances);
  }

  static cuteRollCall() {
    this.#rollCallHelper(this.#cuteInstances);
  }

  get fname() {          // getter
    return this.#fname;
  }
}

class Doggo extends Animal {
  static greet = "Woof"
  static instances = [];
  static #cuteInstances = [];

  constructor(fname, cute, friends) {
    super(fname, cute);
    this.friends = friends;
    Doggo.instances.push(this);
    Doggo.#cuteInstances.push(this);
  }

  greeting() {
    console.log(`${Doggo.greet}! I'm ${this.fname}`)
  }
}

// USAGE
let steven = new Animal("Steven", false)
let mel = new Animal("Moops", true)

let hanna = new Doggo('Hanna', true, 'Felix')
hanna.greeting()

let felix = new Doggo('Felix', false, 'Hanna');

Animal.rollCall();
Doggo.rollCall();