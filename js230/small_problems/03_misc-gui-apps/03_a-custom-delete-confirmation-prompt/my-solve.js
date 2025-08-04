/*
See obisidan
*/

const tasks = [
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

  constructor(parentElement) {
    if (!(parentElement instanceof HTMLUListElement)) {
      throw new TypeError("parentElement must be an `<ul>` element")
    }
    this.$list = parentElement;
    this.$deletePrompt = document.getElementById(TodoUI.deletePromptID);
    this.deletePromptVisible = false;
    this.todoID = null;

  }

  addTodo(text) {
    const item = document.createElement("LI");
    item.innerHTML = `${text}<button class="x-button">Delete</button>`
    this.$list.appendChild(item);
  }
}


// EVENTS AND LOGIC
document.addEventListener("DOMContentLoaded", () => {
  
  const ui = new TodoUI(document.querySelector("#todolist"));

  tasks.forEach((t) => ui.addTodo(t))
})