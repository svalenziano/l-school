"use strict";


/*
Summary: enter numbers and operator, click submit button
Triggers:
  - Prevent Default on submit button!
  
  Click:
    - Submit button = calc result and update result
  

  
class Calculator
  Props:
    - OperatorEle = element representing the operator
    - val1Ele = the element whose value should be used
    - val2Ele = ditto
    - resultEle
  Methods:
    - result = get values and calc result, update resultEle
*/

class Calculator {
  operatorEle;
  val1Ele;
  val2Ele;
  resultEle;

  doMath(x, operator, y) {
    switch (operator) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return y === 0 ? "Can't divide by zero!" : x / y;
    }
  }

  updateResult() {
    let displayNode = this.resultEle.firstChild;
    let mathResult = String(
      this.doMath(
        Number(this.val1Ele.value),
        this.operatorEle.value,
        Number(this.val2Ele.value),
      )
    )
    displayNode.nodeValue = mathResult
    console.log(this.resultEle.value)
  }
}


// EVENTS AND LOGIC
document.addEventListener("DOMContentLoaded", () => {

  const num1 = document.querySelector("#first-number");
  const num2 = document.querySelector("#second-number");
  const operator = document.querySelector("#operator");
  const submitButton = document.querySelector(`input[type="submit"]`);
  const result = document.querySelector("#result");

  const myCalc = new Calculator();
  myCalc.val1Ele = num1;
  myCalc.val2Ele = num2;
  myCalc.operatorEle = operator;
  myCalc.resultEle = result;

  submitButton.addEventListener('click', (e) => {
    e.preventDefault();
    myCalc.updateResult();
  });
});