"use strict";

class Shop {

  constructor($filterContainer, $showcaseContainer, collection) {
    /*
    collection = array of objects
    */
    this.collection = collection;
    // this.$filterContainer = $filterContainer;
    // this.$showcaseContainer = $showcaseContainer;
    
    this.filter = new Filter(
      $filterContainer, 
      ['make', 'model', 'price', 'year'], 
      collection
      );
    
    this.showcase = new Showcase($showcaseContainer);
    this.showcase.display(this.collection);
  }

  static convertToCurrency(integer) {
    return "$" + String(integer)
  }
}

class Filter {

  constructor($container, filterKeys, collection) {
    this.$container = $container;
    this.unfilteredCollection = collection;
    this.fields = [];

    filterKeys.forEach((key) => {
      this.fields.push(new Field($container, key, collection))
    });
    
    this.addFilterButton();
    this.addMetaFilterListener();

    this.$filterButton.addEventListener("click", (e) => {

    })
  }

  addFilterButton() {
    this.$container.innerHTML += `<button class="filter-button">Filter</button>`;
    this.$filterButton = this.$container.querySelector("button.filter-button")
  }

  addMetaFilterListener() {
    /*
    Allows the Filter to immediately respond to changes to any Field
    */
    this.$container.addEventListener("change", (e) => {
      if (e.target instanceof HTMLSelectElement) {
        console.log("change!")
      }
    });
  }
}

class Field {

  constructor($container, key, collection) {
    this.allValues = ['Any']
      .concat(this.getValuesFromCollection(key, collection));
    
    $container.innerHTML += `\
      <label for="${key}">${key}</label>
      <select id="${key}">
      </select>`;
    
    const $select = $container.querySelector(`#${key}`);
    
    for (let string of this.allValues) {
      $select.innerHTML += `<option value="${string}">${string}</option>`
    }
  }

  getValuesFromCollection(key, collection) {
    /*
    Collection = array of objects
    */
    const values = new Set();
    for (let obj of collection) {
      values.add(obj[key])
    }
    return Array.from(values);
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
      <figure>
        <img src="./${item.image}" alt="${item.year} ${item.make} ${item.model}">
      </figure>
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