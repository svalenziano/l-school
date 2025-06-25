class Animal {
  static #kingdom = 'Animalia';

  static accessPrivateProp() {
    console.log(this.#kingdom);
  }
}

class Doggo extends Animal {}

Animal.accessPrivateProp();
Doggo.accessPrivateProp();