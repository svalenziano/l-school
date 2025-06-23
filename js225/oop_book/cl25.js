
// MY SOLVE
class MathUtils {
  static add(n1, n2) {
    return n1 + n2;
  }

  static subtract(n1, n2) {
    return n1 - n2;
  }

  static multiply(n1, n2) {
    return n1 * n2;
  }

  static divide(n1, n2) {
    if (n2 === 0) throw new RangeError('Div by zero')
    return n1 / n2
  }
}


// TESTS
console.log(MathUtils.add(5, 3));       // 8
console.log(MathUtils.subtract(10, 4)); // 6
console.log(MathUtils.multiply(6, 7));  // 42
console.log(MathUtils.divide(20, 5));   // 4
console.log(MathUtils.divide(10, 0));   // RangeError: Division by zero