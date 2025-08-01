"use strict";

class MagicCaption {
  timer = null;
  visibleCaption = null;
  HIDDEN_CSS_CLASS = "hidden";

  constructor(parent) {
    this.parent = parent;
    this.hideAll();

    for (let img of parent.querySelectorAll("img")) {
      img.addEventListener("mouseenter", (e) => {
        this.show(this.getFigcaptionSibling(e.target));
      })

      img.addEventListener("mouseleave", (e) => {
        this.hide(this.getFigcaptionSibling(e.target));
      })
    }
  }

  getFigcaptionSibling(element) {
    return element.parentNode.querySelector("figcaption")
  }

  hide(element) {
    element.classList.add("hidden");
  }

  show(element) {
    element.classList.remove("hidden");
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