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

function colorGeneration(targetGeneration) {
  if (targetGeneration <= 0) return;
  
  let currentGeneration = 1;
  const topNode = document.getElementById("1");
  const queue = [topNode];
  while (queue.length > 0 && currentGeneration < targetGeneration) {
    const length = queue.length
    for (let i = 0; i < length; i++) {
      const node = queue.pop();
      for (let child of node.children) {
        queue.unshift(child);
      }
    }
    currentGeneration += 1;
  }
  for (let node of queue) {
    node.classList.add("generation-color");
  }
}

function clearColors() {
  for (let node of document.querySelectorAll(".generation-color")) {
    node.classList.remove("generation-color");
  }
}

/*
on 500
off 1000
on 1500
off 2000

formula: 
  on: (i * 1000 ) + 500
  off: (i * 1000) + 1000
*/
function cycleDemo() {
  for (let i = 1; i < 9; i++) {
    setTimeout(colorGeneration, (i * 1000 + 500), i);
    setTimeout(clearColors, (i * 1000 + 1000));
  }
}

cycleDemo();
// class Generation

document.addEventListener("keydown", (e) => {
  if (e.key === "," || e.key === "<") {
    
  }
})


// setInterval(colorGeneration, 500, 3);
// setInterval(clearColors, 1000);