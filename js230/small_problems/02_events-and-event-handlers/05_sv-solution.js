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

*/


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

document.addEventListener("DOMContentLoaded", (e) => {

  const classDrop = document.querySelector("#animal-classifications");
  const animalDrop = document.querySelector("#animals");

  classDrop.addEventListener('change', (e) => {
    dualFilter(classDrop, animalDrop, animalOptions);
  });

}); 

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
    removeDropdownFilter(follower)
  }
} 

function addDropdownFilter(dropdown, keysToEnable) {
  let firstValidOption;
  for (let entry of dropdown.options) {
    const text = entry.textContent.trim();

    if (keysToEnable.includes(text)) {
      if (!firstValidOption) firstValidOption = text;
      show(entry)
    } else {
      hide(entry);
    }
  }
  dropdown.value = firstValidOption;
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


