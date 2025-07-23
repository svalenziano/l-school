document.addEventListener("DOMContentLoaded", (e) => {
  const textField = document.querySelector(".text-field");
  let cursorID;

  document.addEventListener("click", (e) => {
    if (e.target === textField) {
      textField.classList.add("focused");

      cursorID = setInterval(() => {
        textField.classList.toggle("cursor");
      }, 500);

    } else {
      textField.classList.remove("focused");
      clearInterval(cursorID);
      textField.classList.remove("cursor");
    }
  });

  

})