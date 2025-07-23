
// EVENTS AND APP LOGIC
document.addEventListener("DOMContentLoaded", (e) => {
  const textField = document.querySelector(".text-field");
  let cursorID;

  document.addEventListener("click", (e) => {
    if (e.target === textField) {
      focusTextBox();
      flashCursor();

    } else {
      unfocusTextBox();
    }

    // helpers
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

  

})