class Animal {
  #fname;
  
  constructor(fname) {
    this.#fname = fname;  // private field
    Animal.instances.push(this);
  }

  static instances = [];

  static rollCall() {
    console.log(`${this.name}s: ${this.instances
      .map((i) => i.fname)
      .join(', ')}`)
  }

  get fname() {
    return this.#fname;
  }
}

class Doggo extends Animal {
  constructor(fname, friends) {
    super(fname);
    this.friends = friends;
    Doggo.instances.push(this);
  }

  static greet = "Woof"
  static instances = [];

  greeting() {
    console.log(`${Doggo.greet}! I'm ${this.fname}`)
  }
}

// USAGE
let steven = new Animal("Steven")
let mel = new Animal("Moops")

let hanna = new Doggo('Hanna', 'Felix')
hanna.greeting()

let felix = new Doggo('Felix', 'Hanna');

Animal.rollCall();
Doggo.rollCall();