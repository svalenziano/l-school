"use strict";
/*
P
  Leftmost
    - input = event listener fires when dropdown value changes
    - side effect = some options are hidden
  Button:
    - Reset interface
E
D
A
  HTML Mechanics:
  - Add `hidden` attribute to hide filtered selections

  v1 algo:
    - If user clicks on Clear:
      - remove `hidden` from all `option` elements
    
    - if user selects Animal:
      - filter classifications (add / remove `hidden` on each element)

    - if user selects Classification:
      - filter animals (add / remove `hidden`... ditto)

  v2 algo:
    - get valid keys from `follower`
  - if selected `driver` option is valid:
    - add filter to `follower`
  - else:
    - remove filter from `follower`
*/


// CONFIG
const animalOptions = {
  'Vertebrate': ['Bear', 'Turtle', 'Whale', 'Salmon', 'Ostrich'],
  'Warm-blooded': ['Bear', 'Whale', 'Ostrich'],
  'Cold-blooded': ['Salmon', 'Turtle'],
  'Mammal': ['Bear', 'Whale'],
  'Bird': ['Ostrich']
};

const animalClassificationOptions = {
  'Bear': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Turtle': ['Vertebrate', 'Cold-blooded'],
  'Whale': ['Vertebrate', 'Warm-blooded', 'Mammal'],
  'Salmon': ['Vertebrate', 'Cold-blooded'],
  'Ostrich': ['Vertebrate', 'Warm-blooded', 'Bird']
};


// HELPER FUNCTIONS
function dualFilter(driver, follower, fOptions) {
  /*
  INPUTS = 
    1) Driver = Dropdown that drives the other dropdown
    2) Follower = Dropdown to be driven
    3) fOptions = Object.  Each key represents valid options 
      Each value is an array of options to enable in the follower
  SIDE EFFECTS = mutate the follower - show/hide options based on `fOptions`
  */
  if (Object.keys(fOptions).includes(driver.value)) {
    addDropdownFilter(follower, fOptions[driver.value]);
  } else {
    removeDropdownFilter(follower);
  }
} 

function addDropdownFilter(dropdown, keysToEnable) {
  let firstValidOption;
  const currentOptionIsValid = keysToEnable.includes(dropdown.value);

  for (let entry of dropdown.options) {
    const text = entry.textContent.trim();

    if (keysToEnable.includes(text)) {
      if (!firstValidOption) firstValidOption = text;
      show(entry)
    } else {
      hide(entry);
    }
  }
  if (!currentOptionIsValid) dropdown.value = firstValidOption;
}

function removeDropdownFilter(dropdown) {
  for (let option of dropdown.querySelectorAll("option")) {
    option.removeAttribute("hidden");
  }
}

function hide(element) {
  element.setAttribute("hidden", "");
}

function show(element) {
  element.removeAttribute("hidden");
}


// EVENTS AND APP LOGIC
let classDrop;
let animalDrop;
let clearButton;

document.addEventListener("DOMContentLoaded", (_) => {

  classDrop = document.querySelector("#animal-classifications");
  animalDrop = document.querySelector("#animals");
  clearButton = document.querySelector("#clear");

  document.addEventListener('change', (e) => {
    if (e.target === classDrop) {
      dualFilter(classDrop, animalDrop, animalOptions);
    } else if (e.target === animalDrop) {
      dualFilter(animalDrop, classDrop, animalClassificationOptions);
    } 
  });

  clearButton.addEventListener('click', (e) => {
    e.preventDefault();
    for (let d of [classDrop, animalDrop]) {
      removeDropdownFilter(d);
      d.selectedIndex = 0;
    }
  })

}); 