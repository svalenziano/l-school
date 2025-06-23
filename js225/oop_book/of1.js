let apple = {
  name: 'Apple',
  color: 'Red',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};

let banana = {
  name: 'Banana',
  color: 'Yellow',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};

let blackberry = {
  name: 'Blackberry',
  color: 'Black',

  isRipe: function() {
    return `This ${this.name} is ripe.`;
  },

  describe: function() {
    return `This ${this.name} is ${this.color}.`;
  },
};


// my solve
/* 
state:
  - name
  - color
behaviors:
  - isRipe()
  - describe()
*/

function createFruit(name, color) {
  return {
    name,
    color,
    isRipe() {
      return `This ${this.name} is ripe.`;
    },
    describe() {
      return `This ${this.name} is ${this.color}.`;
    },
  }
}