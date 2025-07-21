document.addEventListener("DOMContentLoaded", () => {
  const redX = document.querySelector(".x");
  
  document.addEventListener('pointermove', (event) => {
    redX.style.top = `${event.y}px`;
    redX.style.left = `${event.x}px`;
  });

  document.addEventListener('keydown', (e) => {
    switch (e.key.toLowerCase()) {
      case 'r':
        colorChildren(redX, 'red');
        break;
      case 'b':
        colorChildren(redX, 'blue');
        break;
      case 'g':
        colorChildren(redX, 'green');
        break;
    }
  });

})

function colorChildren(obj, colorString) {
  for (let child of obj.childNodes) {
    if (child instanceof HTMLDivElement) {
      child.style.background = colorString;
    }
  }
}