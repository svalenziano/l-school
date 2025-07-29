"use strict";


// TESTS

function test1() {
  // Nested array of nodes
  let nodes = ["BODY",[["HEADER",[]],["MAIN",[]],["FOOTER",[]]]];
  
  // OR
  //
  // ["BODY", [
  //   ["HEADER", []],
  //   ["MAIN", []],
  //   ["FOOTER", []]]]
  
  arrayToNodes(nodes);
  
  // EXPECT
  /*
  <body>
    <header></header>
    <main></main>
    <footer></footer>
  </body>
  */
}

function test2() {
  // Nested array of nodes
  let nodes = ["BODY",[["DIV",[["DIV",[]],["DIV",[["DIV",[]]]]]],["DIV",[]],["DIV",[["DIV",[]],["DIV",[]],["DIV",[]]]]]];
  
  // OR
  //
  // ["BODY", [
  //   ["DIV", [
  //     ["DIV", []],
  //     ["DIV", [
  //       ["DIV",[]]]]]],
  //   ["DIV", []],
  //   ["DIV", [
  //     ["DIV", []],
  //     ["DIV", []],
  //     ["DIV", []]]]]]
  
  arrayToNodes(nodes);
  /*
  <body>
    <div>
      <div></div>
      <div>
        <div></div>
      </div>
    </div>
    <div></div>
    <div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </body>
  */
  
}

// RUN THE TESTS
// test1();
test2();

// MY SOLUTION
function arrayToNodes(nodesArray, parentNode=document.body) {
  let [tagName, children] = [nodesArray[0], nodesArray[1]];

  let currentNode = tagName === "BODY" ? document.body : document.createElement(tagName);
  if (tagName !== "BODY") {
    parentNode.appendChild(currentNode);
  }
  for (let child of children) {
    arrayToNodes(child, currentNode);
  }
}

console.log(document.body.children)