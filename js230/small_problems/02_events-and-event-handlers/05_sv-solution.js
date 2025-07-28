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

  const classDropdown = document.querySelector("#animal-classifications");
  const animalDropdown = document.querySelector("#animals");

  classDropdown.addEventListener('change', (e) => {
    // console.log(e)
    // console.log(classification.value);
    let selected = classDropdown.value;
    let validKeys = Object.keys(animalOptions);
    if (validKeys.includes(selected)) {
      let filteredOptions = animalOptions[selected];
      console.log(filteredOptions);
      addDropdownFilter(animalDropdown, filteredOptions);
    } else {
      removeDropdownFilter(animalDropdown);
    }
  }); 
});

function addDropdownFilter(dropdown, keysToEnable) {
  /*
  Iterate through all contained `option` elements and add/remove 'hidden' attribute, as appropriate
  Select the first enabled attribute
  */
  // all other keys will be disabled
  let firstValidOption;
  for (let entry of dropdown.options) {
    const content = entry.textContent.trim();
    
    if (keysToEnable.includes(content)) {
      if (!firstValidOption) firstValidOption = content;
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


