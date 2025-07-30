"use strict";

/*
P
E
D
A
- Set document event 'click' listener
  - if it's gold silver or bronze:
    - preventDefault
    - get the data.block value
    - invoke showTab(value)  (HELPER)

HELPER FUNCTIONS
- showTab(value):
  - set display-none on all of gold, silver, bronze
  - use query selector to select element that corresponds to `value`
  - show that element
*/

document.addEventListener('DOMContentLoaded', (e) => {

  let [gold, silver, bronze] = ['gold', 'silver', 'bronze'].map((metal) => {
    return document.querySelector(`a[data-block="${metal}"]`)
  });

  document.addEventListener('click', (e) => {
    console.log(e.target);
  })
})