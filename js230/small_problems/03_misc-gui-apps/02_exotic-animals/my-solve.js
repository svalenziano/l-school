"use strict";

class MagicCaption {
  timerID = null;
  visibleCaption = null;
  HIDDEN_CSS_CLASS = "hidden";

  constructor(parent) {
    this.parent = parent;
    this.hideAll();
    this.addListeners();
  }

  addListeners() {
    for (let img of this.parent.querySelectorAll("img")) {
      img.addEventListener("mouseenter", (e) => {
        this.timerID = setTimeout(() => {
          this.show(this.getFigcaptionSibling(e.target));
        }, 1000);
      })

      img.addEventListener("mouseleave", (e) => {
        clearTimeout(this.timerID)
        this.timerID = null;
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