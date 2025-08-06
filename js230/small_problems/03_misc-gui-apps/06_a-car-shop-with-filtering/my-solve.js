"use strict";

class Shop {

  constructor($filterContainer, $showcaseContainer, collection) {
    /*
    collection = array of objects
    */
    this.collection = collection;
    this.$filterContainer = $filterContainer;
    this.$showcaseContainer = $showcaseContainer;
    this.showcase = new Showcase($filterContainer);
    this.showcase.display(this.collection);
  }
}

class Showcase {

  constructor($container) {
    $container.innerHTML += `\
    <div class="showcase"></div>`
    this.$container = $container;
    this.$showcase = $container.querySelector(".showcase");
  }

  display(collection) {
    for (let item of collection) {
      this.$showcase.innerHTML += `\
      <div class="showcase-item">
      <p class="bold">${item.make} ${item.model}</p>
      <p>Year: ${item.year}</p>
      <p>Price: $${item.price}</p>
      <button>Crush</button>
      </div>`
    }
  }
}


// EVENTS AND LOGIC
const cars = [
  { make: 'Honda', image: 'images/honda-accord-2005.jpg', model: 'Accord', year: 2005, price: 7000 },
  { make: 'Honda', image: 'images/honda-accord-2008.jpg', model: 'Accord', year: 2008, price: 11000 },
  { make: 'Toyota', image: 'images/toyota-camry-2009.jpg', model: 'Camry', year: 2009, price: 12500 },
  { make: 'Toyota', image: 'images/toyota-corrolla-2016.jpg', model: 'Corolla', year: 2016, price: 15000 },
  { make: 'Suzuki', image: 'images/suzuki-swift-2014.jpg', model: 'Swift', year: 2014, price: 9000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 25000 },
  { make: 'Audi', image: 'images/audi-a4-2013.jpg', model: 'A4', year: 2013, price: 26000 },
];

document.addEventListener("DOMContentLoaded", () => {

  let shop = new Shop(
    document.querySelector("nav.shop-filter"),
    document.querySelector("div.shop-showcase"),
    cars
  )
})