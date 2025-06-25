'use strict';



/*
See Obsidian for process
*/

const ItemManager = {
  items: [],
  create(item, category, qty) {
    if ((qty ?? -1) < 0) throw new Error("qty must be > 0");
    if (!this.validItemName(item)) throw new Error("Invalid item name");
    if (!this.validCategoryName(category)) throw new Error("Invalid category name");
    
    const itemCode = item.replace(' ', '').slice(0, 3).toUpperCase();
    const catCode = category.replace(' ', '').slice(0, 2).toUpperCase();

    this.items.push({
      sku: itemCode + catCode,
      name: item,
      category,
      qty,
    });
  },

  update(sku, itemObj) {
    // use itemObj to update properties of existing item referenced by SKU
    
    let objToModify = this.returnItem(sku)
    
    // for each property in itemObj, set object property
    for (let prop in itemObj) {
      objToModify[prop] = itemObj[prop];
    }
  },

  delete(sku) {
    // Delete item with matching sku
    let itemToDelete = this.returnItem(sku);

    if (itemToDelete) {
      this.items.splice(this.items.indexOf(itemToDelete), 1);
      return;
    }

    throw new Error(sku + " not found in `items`.")
  },

  // HELPERS ------------------------------------------------------------------

  returnItem(sku) {
    // find and return object with matching `sku`
    for (let item of this.items) {
      if (item.sku === sku) {
        // console.log(item.sku + ' === ' + sku)
        return item;
      }
    }
  },

  validItemName(n) {
    return (typeof n === 'string' && n.replace(' ', '').length > 4);
  },

  validCategoryName(n) {
    return (n.indexOf(' ') === -1 && n.length > 4);
  },
}

// my tests
let tests;

function runTests(fn, thisArg, argsMatrix) {
  for (let args of argsMatrix) {
    try {
      fn.apply(thisArg, args);
      console.log(args + " -> Success!")
    } catch (e) {
      console.log(args + " -> " + e.name + ': ' + e.message)
    }
  }
}

tests = [
  // valids
  ['basket ball', 'sports', 1],  
  ['awesome bike', 'sports', 15],  
  ['radical pot', 'kitchen', 20],  
  ['periscope', 'submarine', 0],  

  ['bbl', 'sports', 0],         // invalid item name
  ['swimming pool', 'spt', 0],  // invalid category
  ['swimming pool', 'sports ball', 0],  // invalid category
  ['basket ball', 'sports'],    // missing qty
  ['basket ball', 'sports', -99],    // Invalid qty
]

runTests(ItemManager.create, ItemManager, tests);
console.log(ItemManager.items);

tests = [
  // valids
  ['AWESP', {name: 'AWESOME BIKE'}],
  ['BASSP', {category: 'balls', qty: 99}],
  ['RADKI', {}],  // no change
  ['PERSU', {category: 'Submersible', qty: 99}],
]

runTests(ItemManager.update, ItemManager, tests);
console.log(ItemManager.items);

tests = [
  // Valid
  ['RADKI'],
  ['BASSP'],
  // Invalid
  ['FAKE SKU'],
  ['BASSP'],  // Already deleted
  ['persu'],  // test case-sensitivity
  [''],
]

runTests(ItemManager.delete, ItemManager, tests);
console.log(ItemManager.items);


// // LS TESTS
// ItemManager.create('basket ball', 'sports', 0);           // valid item
// ItemManager.create('asd', 'sports', 0);
// ItemManager.create('soccer ball', 'sports', 5);           // valid item
// ItemManager.create('football', 'sports');
// ItemManager.create('football', 'sports', 3);              // valid item
// ItemManager.create('kitchen pot', 'cooking items', 0);
// ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

// ItemManager.items;
// // returns list with the 4 valid items

// ReportManager.init(ItemManager);
// ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

// ItemManager.update('SOCSP', { quantity: 0 });
// ItemManager.inStock();
// // returns list with the item objects for football and kitchen pot
// ReportManager.reportInStock();
// // logs football,kitchen pot
// ItemManager.itemsInCategory('sports');
// // returns list with the item objects for basket ball, soccer ball, and football
// ItemManager.delete('SOCSP');
// ItemManager.items;
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

// const kitchenPotReporter = ReportManager.createReporter('KITCO');
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

// ItemManager.update('KITCO', { quantity: 10 });
// kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10


