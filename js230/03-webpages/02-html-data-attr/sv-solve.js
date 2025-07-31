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

document.addEventListener('DOMContentLoaded', (_) => {

  let [gold, silver, bronze] = ['gold', 'silver', 'bronze'].map((metal) => {
    return document.querySelector(`a[data-block="${metal}"]`)
  });

  const tabs = [gold, silver, bronze]

  highlightTab(gold)
  showBlock(gold.dataset.block)

  document.addEventListener('click', (e) => {
    
    if (tabs.includes(e.target)) {
      e.preventDefault();
      highlightTab(e.target)
      showBlock(e.target.dataset.block)
      // console.log(e.target.dataset.block);
    }
  });
})

function showBlock(dataBlockValue) {
  hideAllBlocks();
  const element = document.querySelector(`article[data-block="${dataBlockValue}"`)
  element.classList.remove("hidden");
}

function hideAllBlocks() {
  for (let block of document.querySelectorAll("article[data-block]")) {
    block.classList.add("hidden");
  }
}

function highlightTab(element) {
  resetTabs();
  element.classList.add("highlight")
}

function resetTabs() {
  for (let tab of document.querySelectorAll("a[data-block]")) {
    tab.classList.remove("highlight");
  }
}