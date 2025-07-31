"use strict";

/*
class List:


*/




// EVENTS AND LOGIC
document.addEventListener("DOMContentLoaded", () => {

  const itemNameEle = document.querySelector("#name");
  const qtyEle = document.querySelector("#quantity");
  const button = document.querySelector(`input[type="submit"]`);
  const listEle = document.querySelector("#grocery-list");

  document.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e);
    
    let qty = qtyEle.value || 1;
    let text = `${qty} ${itemNameEle.value}`;
    createNewListItem(listEle, text);

    clearValue(itemNameEle, qtyEle);
  })


})

// HELPERS
function createNewListItem(listEle, value) {
  let newLine = document.createElement("LI");
  newLine.textContent = value;
  listEle.appendChild(newLine);
}

function clearValue(...elements) {
  for (let ele of elements) {
    ele.value = "";
  }
}