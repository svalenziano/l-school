class Phone {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.battery = 60;
  }

  getPhoneInfo() {
    return `${this.year} ${this.brand} ${this.model}`
  }

  printBattery() {
    console.log(`The battery level of this ${this.getPhoneInfo()} is ${this.battery}`)
  }

  printInfo() {
    console.log(`Well hi!  I'm a ${this.getPhoneInfo()}`);
  }
}

let i = new Phone('Apple', 'iPhone 12', 2020);
let s = new Phone('Samsung', 'Galaxy S21', 2021);
i.printInfo();
i.printBattery();

s.printInfo();
s.printBattery();