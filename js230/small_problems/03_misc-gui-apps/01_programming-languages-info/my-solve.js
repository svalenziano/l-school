import {languages} from "./ls-data.js"

class SummaryDisplay {

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
    this.parent.addEventListener("click", function handleButtonClick(e) {
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

