class Animal {
  static kingdom = 'Animalia';

  static #sayHi() {
    console.log("Hi!")
  }

  static public() {
    this.#sayHi();
  }
}

class Doggo extends Animal {}

Animal.public();
console.log(Animal.kingdom);
