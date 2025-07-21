function walk(node, callback) {
  callback(node);
  for (let child of node.childNodes) {
    walk(child, callback);
  }
}

function getElementsByTagName(nameString) {
  let found = [];
  walk(document, (node) => {
    if (node.nodeName === nameString) {
      found.push(node);
    }
  });
  return found;
}

function addClassToElements(elements, classString) {
  for (let e of elements) {
    e.classList.add(classString);
  }
}

let paragraphs = getElementsByTagName('P');
addClassToElements(paragraphs, 'article-text')