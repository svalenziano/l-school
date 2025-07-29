"use strict";

/*
P
  - Input = integer = "generation"
  - Return = None
  - Side effect = mutate DOM -> apply .generation-color to elements in that generation

E
D
A
  - Idea 1: BFS -> conduct Breadth-first traversal:
    - break traversal into 'generations'
    - use `count` to track which generation you're on
    - for every element of generation:
      - unshift nodes (for future iteration)
      - if count === generation: add class to node

      
  - Algo 1:
    - curentGeneration = 1
    - topNode = node with id="1"
    - queue = [topNode];
    - while queue isn't empty AND currentGeneration <= targetGeneration:
      - get current length of queue and iterate that many times:
        - pop a node off the queue
        - unshift all of the node's children to queue
      - currentGeneration += 1
    - the queue is now full of nodes from the targetGeneration
    - for each node of the queue
      - apply .generation-color class
*/


class GenerationController {

  constructor() {
    this.randomizeGen();
    this.applyColor(this.currentGen);
  }

  randomizeGen() {
    this.currentGen = Math.floor(Math.random() * 7)
  }

  increaseGeneration() {
    this.currentGen += 1;
    this.clearColors();
    this.applyColor();
    console.log(this.currentGen);
  }

  decreaseGeneration() {
    this.currentGen -= 1;
    this.clearColors();
    this.applyColor();
    console.log(this.currentGen);
  }

  applyColor(targetGeneration = this.currentGen) {
    if (targetGeneration <= 0) return;
    
    let currentGeneration = 1;
    const topNode = document.getElementById("1");
    const queue = [topNode];
    while (queue.length > 0 && currentGeneration < targetGeneration) {
      const length = queue.length
      for (let i = 0; i < length; i++) {
        const node = queue.shift();
        for (let child of node.children) {
          queue.push(child);
        }
      }
      currentGeneration += 1;
    }
    for (let node of queue) {
      node.classList.add("generation-color");
    }
  }

  clearColors() {
    for (let node of document.querySelectorAll(".generation-color")) {
      node.classList.remove("generation-color");
    }
  }

  demoAnimation() {
    this.clearColors();
    const FULL_INTERVAL = 750;
    const HALF_INTERVAL = FULL_INTERVAL / 2;
    const GENERATIONS_TO_DEMO = 9;
    for (let i = 1; i < GENERATIONS_TO_DEMO; i++) {
      setTimeout(() => this.applyColor(i), (i * FULL_INTERVAL + HALF_INTERVAL));
      setTimeout(() => this.clearColors(), (i * FULL_INTERVAL + FULL_INTERVAL));
    }
    // Schedule final reset after last animation
    setTimeout(() => {
      this.clearColors();
      this.randomizeGen();
      this.applyColor();
    }, GENERATIONS_TO_DEMO * FULL_INTERVAL + FULL_INTERVAL);
  }

  displayHelp() {
    const instructionText = "< and > keys change which generation is highlighted, \
'd' key runs a demo."
    const instructions = document.createElement("PRE");
    instructions.textContent = instructionText;
    document.body.appendChild(instructions);
  }


}


// APP LOGIC
let gen;

document.addEventListener("DOMContentLoaded", (_) => {
  gen = new GenerationController();
  gen.displayHelp();

  document.addEventListener("keydown", (e) => {
    if (e.key === "," || e.key === "<") {
      gen.decreaseGeneration();
    } else if (e.key === "." || e.key === ">") {
      gen.increaseGeneration();
    } else if (e.key.toLowerCase() === 'd') {
      gen.demoAnimation();
    }
  });
});