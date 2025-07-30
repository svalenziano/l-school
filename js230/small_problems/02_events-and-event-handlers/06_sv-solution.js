"use strict";


/*
click listener:
  - if it's a nav link
    - scroll to the article, add highlight the element
  - if it's an article or child
    - highlight the containing article
  - elsewhere on page:
    - highlight `main`

HELPER FUNCS
highlight(element):
  - remove highlight from all elements
  - highlight the `element`
*/


// HELPERS
const HIGHLIGHT_CLASS = "highlight";

function getElementFromHref(elementWithHref) {
  return document.querySelector(elementWithHref.getAttribute("href"));
}

function highlight(element) {
  if (element) {
    for(let highlighted of document.querySelectorAll(".highlight")) {
      highlighted.classList.remove(HIGHLIGHT_CLASS);
    }
    element.classList.add(HIGHLIGHT_CLASS)
  } else {
    console.log("element not found")
  }
}

function scrollTo(element) {
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }
  else {
    console.log("element not found")
  }
}

function isNavLink(element) {
  return navlinks.includes(element);
}

function isArticleOrChild(element) {
  for (let article of articles) {
    if (article.contains(element)) return true;
  }
  return false;
}

function isArticle(element) {
  return articles.includes(element);
}

function getContainingArticle(element) {
  // returns: the element if it's an article
  //          the nearest containing article, if it exists
  //          or null, if the element isn't contained within an article
  let cur = element;

  while (true) {
    if (isArticle(cur)) return cur;  // found
    if (cur === document.body || 
        cur.parentElement instanceof HTMLHtmlElement) return null;  // not found
    cur = cur.parentElement;
  }
}


// EVENTS AND LOGIC
let articles, navlinks; // expose as globals for debugging

document.addEventListener("DOMContentLoaded", (_) => {

  articles = Array.from(document.querySelectorAll("article"));
  navlinks = Array.from(document.querySelectorAll("header ul li a"));

  document.addEventListener("click", (e) => {

    if (isNavLink(e.target)) {
      e.preventDefault();
      highlight(getElementFromHref(e.target));
      scrollTo(getElementFromHref(e.target));
    } else if (isArticleOrChild(e.target)) {
      highlight(getContainingArticle(e.target));
    } else {
      highlight(document.querySelector("main"));
    }
  });
});