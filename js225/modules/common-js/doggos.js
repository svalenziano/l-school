class Doggo {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`Bark! I'm ${this.name}!`);
  }
}

let fname = "Hanna"

module.exports = {Doggo, fname}