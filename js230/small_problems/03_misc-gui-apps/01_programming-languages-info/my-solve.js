import {languages} from "./ls-data.js"

class SummaryDisplay {
  /*
  P
    Summary: Display a summary for each object in an array.
    Inputs: 
    Output: 
    Return: 
    Side Effects: 
    Requirements: 
      - create all elements within a container with id `programming-languages"
      - Create one H2 for the `name` key
      - Create one <p> for the `description` key
      - Truncate the <p> display to 120 characters
      - `Show More` button shows all text in the <description>

  E
  D
    - array of langs
      [
        {
          name:
          description:
          folded: (boolean)
          domButton:  (DOM ele reference)
          domDescription: (DOM ele)
        }
      ]
  A
    Idea 1:
    Algo 1:
      - SummaryDisplay class
        props:
          - languages = array of objects
        methods:
          - constructor(parentID, languages)
            - get containing div using parentID
            - for each language (each obj in this.languages)
              - create a <section> container div within parent
              - create <h2> and append to container
              - create <p> and append to container
              - create `button` key, append to `buttons` Map?
                - key = button object
                - value = <p> to modify
              - append all to container
            - attach 'click' listener to PARENT div, and delegate to each button
              - for each lang in `languages`:
                - if e.target === lang.button:
                 - this.toggleFold(lang)
          - toggleFold(language):
            - input = language object from `languages` array
            - return = none
            - sideeffect = 
              - if currently folded, then unfold(language)
              - if currently unfolded, then fold(language)
          - fold(language):
            - set <p> text to truncated value
            - change textContent on button to "Show more"
            - toggle `languages` -> lang.folded = true
          - unfold(language):
            - set <p> text to unabridged value
            - change textContent on button to "Show less"
            - set lang.folded = false
  */
  FOLD_CHARACTER_LIMIT = 120;

  constructor(parentEle, languages) {
    this.parent = parentEle
    this.languages = languages;
    for (let langEntry of languages) {

      const section = document.createElement("SECTION");
      this.parent.appendChild(section);
      
      // CREATE child ELEMENTS and store in class
      const name = document.createElement("H2");
      name.textContent = langEntry.name;
      
      const description = document.createElement("P");
      description.textContent = langEntry.description;

      const button = document.createElement("BUTTON");

      // Update `languages`
      langEntry.folded = false;
      langEntry.domDescription = description;
      langEntry.domButton = button;

      // Attach and update DOM
      section.append(name, description, button);
      this.fold(langEntry);
    }
    // Attach listener
    this.parent.addEventListener("click", function f(e) {
      for (let langEntry of languages) {
        if (e.target === langEntry.domButton) {
          this.toggleFold(langEntry);
        }
      }
    }.bind(this))
  }

  toggleFold(langEntry) {
    langEntry.folded ? this.unfold(langEntry) : this.fold(langEntry);
  }

  fold(langEntry) {
    const abridged = langEntry.description.slice(0, this.FOLD_CHARACTER_LIMIT);
    langEntry.domDescription.textContent = abridged + "...";
    langEntry.domButton.textContent = "Show more";
    langEntry.folded = true;
  }

  unfold(langEntry) {
    langEntry.domDescription.textContent = langEntry.description;
    langEntry.domButton.textContent = "Show less";
    langEntry.folded = false;

  }
}

document.addEventListener("DOMContentLoaded", () => {
  new SummaryDisplay(document.body.querySelector("main"), languages)
})

