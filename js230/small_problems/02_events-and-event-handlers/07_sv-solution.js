"use strict";

let element1;
let element2;
let element3;

document.addEventListener("DOMContentLoaded", (_) => {
  // PROVIDED BY LS
    // Possible elements for use with the scenarios
    element1 = document.querySelector('table');
    element2 = document.querySelector('main h1');
    element3 = document.querySelector('main');

    // Possible callback for use with the scenarios
    const callback = ({target, currentTarget}) => {
      console.log(`Target: ${target.tagName}\nCurrent Target: ${currentTarget.tagName}`);
    };

    // ONLY 1 SCENARIO SHOULD RUN AT AT TIME
    // modify this constant to determine which scenario is executed
    const SCENARIO = 6;
    console.log("SCENARIO =", SCENARIO)
    switch (SCENARIO) {
      case 1:
        console.log(delegateEvent(element1, 'p', 'click', callback) === undefined);
        break;      
      case 2:
        console.log(delegateEvent(element2, 'p', 'click', callback) === true);
        break;      
      case 3:
        console.log(delegateEvent(element2, 'h1', 'click', callback) === true);
        break;
      case 4:
        console.log(delegateEvent(element3, 'h1', 'click', callback) === true);
        break;
      case 5:
        console.log(delegateEvent(element3, 'aside p', 'click', callback) === true);
        break;
      case 6:
        console.log(delegateEvent(element2, 'p', 'click', callback) === true);
        break;
      default:
        console.log("Uh oh.")
      

    }




  // MY SOLUTION

  /*
  P
    Input = 
  E
  D
  A



  */
  function delegateEvent(parentElement, selector, eventType, callback) {
    /*
    INPUTS
      parentElement = all children of this element will be traversed 
          in search of the selector
      selector = string =  CSS selector eg 'p'
      eventType = string eg 'click'
      callback = function to be attached to the event
    RETURN = true if successful event attachment, else undefined

    ALGO
      - IDEA 1: Search forthe element, then search for the child, 
          attach the listener and stop propogation
    */
    if (!parentElement) return undefined;

    parentElement.addEventListener(eventType, (e) => {
      const children = parentElement.querySelectorAll(selector);
      for (let child of children) {
        if (e.target === child) {
          callback(e);
        }
      }
    });

    return true;
  }


});

