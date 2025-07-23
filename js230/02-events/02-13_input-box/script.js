
// EVENTS AND APP LOGIC
document.addEventListener("DOMContentLoaded", (e) => {
  const textField = document.querySelector(".text-field");
  const contentField = document.querySelector(".content");
  let cursorID;

  document.addEventListener("click", (e) => {
    if (e.target === textField) {
      focusTextBox();
      flashCursor();

    } else {
      unfocusTextBox();
    }

    // HELPERS
      function focusTextBox() {
        textField.classList.add("focused");
      }

      function flashCursor() {
        cursorID = setInterval(() => {
          textField.classList.toggle("cursor");
        }, 500);
      }

      function unfocusTextBox() {
        textField.classList.remove("focused");
        clearInterval(cursorID);
        textField.classList.remove("cursor");
      }

  });

  document.addEventListener("keydown", (e) => {
    if (!textBoxIsFocused()) return;

    if (e.key === "Backspace") {
      const text = contentField.textContent;
      contentField.textContent = text.slice(0, -1);
      return;
    }

    if (keyShouldBeIgnored()) {
      contentField.textContent += e.key;
    }

    // HELPERS
    function keyShouldBeIgnored() {
      const keysToIgnore = [
        'Shift', 
        'Control', 
        'Unidentified', 
        'Meta', 
        'Alt', 
        'CapsLock',
        'Home',
        'End',
        'Insert',
        'Delete',
        'Backspace'
        ];
      return !keysToIgnore.includes(e.key)
    }

    function textBoxIsFocused() {
      return textField.classList.contains("focused");
    }
  });

  

})