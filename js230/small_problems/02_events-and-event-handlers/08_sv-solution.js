"use strict";


// My solution

/*
P
  - Tracker class
    - properties
      - `events` = array of events
    - methods
      - list() = return array of events that were tracked
      - elements() = return array of CSS selectors
      - track(event, callback) = 
      - clear() = redefine `events` to empty array

  - `track(callback)` = 
    - bound function, context = `tracker` instance
    - input = (???)
      1) event 
      2) callback
    - SE = call the callback on the event, add the event to `events`
E
D
A
*/

class Tracker {
  constructor() {
    this.clear();
  }

  track(event, callback) {
    console.log('event =>', event);
    console.log('callback =>', callback);
  }

  list() {
    return events;
  }

  elements() {
    return this.events.map((event) => event.target)
  }

  clear() {
    this.events = [];
  }
}

const tracker = new Tracker();

const track = tracker.track.bind(tracker)



// LS for tests
document.addEventListener("DOMContentLoaded", () => {
  let divRed = document.getElementById("red");
  let divBlue = document.getElementById("blue");
  let divOrange = document.getElementById("orange");
  let divGreen = document.getElementById("green");

  divRed.addEventListener('click', track(event => {
    document.body.style.background = 'red';
  }));

  divBlue.addEventListener('click', track(event => {
    event.stopPropagation();
    document.body.style.background = 'blue';
  }));

  divOrange.addEventListener('click', track(event => {
    document.body.style.background = 'orange';
  }));

  divGreen.addEventListener('click', track(event => {
    document.body.style.background = 'green';
  }));
});