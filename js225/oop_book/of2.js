/* 
MY SOLVE

State
  - brand - str
  - model - str
  - Release year - int
  - batteryLevel - integer

Behavior
  - battery level
  - info about phone
*/

function createPhone(brand, model, year) {
  return {
    brand,
    model,
    year,
    battery: 80,

    checkBattery() {
      console.log("The battery is " + String(this.battery) + "% full.");
    },

    getInfo() {
      console.log(`Hi! I'm a ${this.year} ${this.brand} ${this.model}.  Beep boop.`);
    },
  }
}

let a = createPhone('Apple', 'iPhone 12', 2020);
let s = createPhone('Samsung', 'Galaxy S21', 2021);

a.checkBattery();
a.getInfo();
s.checkBattery();
s.getInfo();