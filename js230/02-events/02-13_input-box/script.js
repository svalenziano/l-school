document.addEventListener("DOMContentLoaded", (e) => {
  const textField = document.querySelector(".text-field");

  document.addEventListener("click", (e) => {
    if (e.target === textField) {
      textField.classList.add("focused");
    } else {
      textField.classList.remove("focused");
    }
  });

  setInterval(() => {
    textField.classList.toggle("cursor");
  }, 500);

})