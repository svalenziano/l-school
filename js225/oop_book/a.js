class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  
  area() {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);  // call the superclass constructor
  }
}

let s = new Square(5);
console.log(s.area());  // 25
console.log(s.width);    // 5

// Remember that a Square is both a Square AND a Rectangle!
console.log(s instanceof Square);
console.log(s instanceof Rectangle);

