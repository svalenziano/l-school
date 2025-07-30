"use strict";

// PROVIDED BY LS
  // Possible elements for use with the scenarios
  const element1 = document.querySelector('table');
  const element2 = document.querySelector('main h1');
  const element3 = document.querySelector('main');

  // Possible callback for use with the scenarios
  const callback = ({target, currentTarget}) => {
    alert(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
  };

// MY SOLUTION
function delegateEvent(parentElement, selector, eventType, callback) {
  
}