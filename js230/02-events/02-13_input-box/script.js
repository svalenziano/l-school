
// EVENTS AND APP LOGIC
document.addEventListener("DOMContentLoaded", () => {
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
        if (!cursorID) {
          cursorID = setInterval(() => {
            textField.classList.toggle("cursor");
          }, 500);
        }
      }

      function unfocusTextBox() {
        clearInterval(cursorID);
        cursorID = null;
        textField.classList.remove("focused");
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

    if (e.key.length === 1) {
      contentField.textContent += e.key;
    }

    // HELPERS

    function textBoxIsFocused() {
      return textField.classList.contains("focused");
    }
  });
});