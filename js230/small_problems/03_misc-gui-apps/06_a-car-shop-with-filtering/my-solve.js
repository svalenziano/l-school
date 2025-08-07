"use strict";

class Utility {
  static checkConnected(...elements) {
    for (let ele of elements) {
      if (!(ele instanceof HTMLElement)) throw new Error(`${ele} is not an HTMLElement!`)
      if (!ele.isConnected) throw new Error(`${ele}.isConnected === false`)
    }
  }
}

class Shop {

  constructor($filterContainer, $showcaseContainer, collection) {
    Utility.checkConnected($filterContainer, $showcaseContainer);
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

    this.addFilterButtonListener();
  }

  static convertToCurrency(integer) {
    return "$" + String(integer)
  }

  addFilterButtonListener() {
    /*
    Update Showcase when filter button is clicked
    */
    this.filter.$filterButton.addEventListener("click", (e) => {
      const filteredItems = this.filter.getFilteredCollection();
      this.showcase.display(filteredItems);
    })
  }
}

class Filter {

  constructor($container, filterKeys, collection) {
    this.$container = $container;
    Utility.checkConnected(this.$container);
    this.unfilteredCollection = collection;
    this.fields = [];

    filterKeys.forEach((key) => {
      this.fields.push(new Field(this.$container, key, collection))
    });
    
    this.addFilterButton();
    this.addMetaFilterListener();

  }

  get fieldKeys() {
    return Object.keys(this.fields);
  }

  getFilteredCollection() {
    /*
    Returns filtered collection based on current filter values
    */

    // Use Array.filter` to iterate through each ENTRY `unfilteredCollection`

      // For each field:
        // If the field is not 'Any' AND the field value doesn't match the entry value:
        // return false
      // return true (default return value, if no disqualifiers are found)

    const filtered = this.unfilteredCollection.filter((entry) => {
      for (let field of this.fields) {
        if (field.value !== Field.NO_FILTER && String(field.value) !== String(entry[field.key])) {
          return false;
        }
      }
      return true;
    });

    return filtered
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

  static NO_FILTER = 'Any'

  constructor($container, key, collection) {
    this.key = key;
    
    this.allValues = [Field.NO_FILTER]
      .concat(Field.getValuesFromCollection(key, collection));
    
    this.$select = Field.createSelectWithOptions(key, this.allValues)
    
    $container.append(
      Field.createLabel(key),
      this.$select
    );

    Utility.checkConnected($container, this.$select)
  }

  get value() {
    return this.$select.value;
  }

  static getValuesFromCollection(key, collection) {
    /*
    Collection = array of objects
    Return = unique values that match key
    */
    const values = new Set();
    for (let obj of collection) {
      values.add(obj[key])
    }
    return Array.from(values);
  }

  static createLabel(key) {
    const label = document.createElement("LABEL");
    label.setAttribute("for", key);
    label.textContent = key;
    return label;
  }

  static createSelectWithOptions(key, options) {
    const select = document.createElement("SELECT");
    select.setAttribute("id", key);
    for (let option of options) {
      const x = document.createElement("OPTION");
      x.setAttribute("value", option);
      x.textContent = option;
      select.append(x);
    }
    return select;
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
    this.$showcase.innerHTML = ""

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