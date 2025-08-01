"use strict";

class MagicCaption {
  timer = null;
  visibleCaption = null;
  HIDDEN_CSS_CLASS = "hidden";

  constructor(parent) {
    this.parent = parent;
    this.hideAll();
  }

  hide(element) {
    element.classList.add("hidden");
  }

  hideAll() {
    for (let figcaption of this.parent.querySelectorAll("figcaption")) {
      this.hide(figcaption);
    }
  }
}


// EVENTS AND LOGIC
document.addEventListener("DOMContentLoaded", () => {
  const c = new MagicCaption(document.querySelector("div.gallery"));
})