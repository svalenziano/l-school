"use strict";

/*
See obisidan
*/

const placeholderTasks = [
  "Rise and smile",
  "Check on all sheep, goats, horses, and camels grazing nearby",
  "Count animals to ensure none are missing",
  "Notice signs of illness or injury",
  "Milk sheep and goats by hand into wooden vessels",
  "Strain milk and set aside for making airag (fermented mare's milk) or ail (dried cheese)",
  "Store fresh dairy in clay jars or hide containers",
  "Tend the felt yurt: secure tension ropes, repair small tears",
  "Inspect and oil wooden tent poles",
  "Sweep around the stove area to remove ash and debris",
  "Lead animals to new pasture if grass is depleted",
  "Use low branches and shrubs to supplement feed",
  "Scout water sources—streams or temporary ponds",
  "Sharpen the Mongol bow and arrows",
  "Oil leather quivers and saddles to keep them supple",
  "Check the condition of shearing knives and sharpen if needed",
  "Skewer strips of meat (usually mutton or horse) for drying",
  "Boil horse broth or simple millet porridge over a portable stove",
  "Portion dried meat and cheese into leather pouches",
  "Gather all animals before dusk",
  "Use trained hounds or falcons to assist if available",
  "Place weaker or young animals in a central pen",
  "Perform a second round of milking for airag production",
  "Stir fermenting mare's milk to promote even souring",
  "Sample small amounts to gauge readiness",
];


class TodoUI {
  static deletePromptID = "delete-prompt"
  static deletePromptTextID = "delete-text-name"

  constructor(parentElement) {
    if (!(parentElement instanceof HTMLUListElement)) {
      throw new TypeError("parentElement must be an `<ul>` element")
    }
    this.$list = parentElement;

    this.$deletePrompt = document.getElementById(TodoUI.deletePromptID);
    this.$deleteYes = this.$deletePrompt.querySelector(`button[data-id="yes"]`);
    this.$deleteNo = this.$deletePrompt.querySelector(`button[data-id="no"]`);
    
    for (let ele of [
      this.$list,
      this.$deletePrompt,
      this.$deleteYes,
      this.$deleteNo,
    ]) {
      if (!ele) throw new Error("Failed to find DOM element")
    }

    this.todoIDToModify = null;
    this.nextTodoID = 0;  // used to assign a unique ID to each todo

    document.addEventListener("click", (e) => {
      if (this.deletePromptVisible) {
        if (e.target === this.$deleteYes) {
          console.log("DELETION CONFIRMED");
          this.deleteTodo(this.todoIDToModify);
          this.hideDeletePrompt();
        } else if (
          e.target === this.$deleteNo || 
          !(this.$deletePrompt.contains(e.target))
          ) {
            console.log("deletion cancelled")
            this.hideDeletePrompt();
        } else {
          console.log("Nothing done.")
        }
      } else {
        if (e.target.classList.contains("delete")) {
          console.log("DELETE BUTTON CLICKED TKTK")
          this.todoIDToModify = e.target.dataset.id
          this.showDeletePrompt();
        }
      }
    });
  }

  get deletePromptVisible() {
    return !(this.$deletePrompt.classList.contains("hidden"));
  }

  addTodo(text) {
    const item = document.createElement("LI");
    item.dataset.id = this.nextTodoID;

    item.innerHTML = `${text}<button class="delete x-button" \
    data-id="${this.nextTodoID}">Delete</button>`;

    this.$list.appendChild(item);
    this.nextTodoID += 1;
  }

  deleteTodo(todoID) {
    this.getTodo(todoID).remove();
  }

  getTodo(todoID) {
    return this.$list.querySelector(`li[data-id="${todoID}"]`)
  }

  showDeletePrompt() {
    const todoListItem = this.getTodo(this.todoIDToModify);
    const todoText = todoListItem.firstChild.textContent;
    this.$deletePrompt.querySelector("#todo-text").textContent = todoText;
    
    this.$deletePrompt.classList.remove("hidden");
  }

  hideDeletePrompt() {
    this.$deletePrompt.classList.add("hidden");
  }
}


// EVENTS AND LOGIC
document.addEventListener("DOMContentLoaded", () => {
  
  const ui = new TodoUI(document.querySelector("#todolist"));

  placeholderTasks.forEach((t) => ui.addTodo(t))

  
})