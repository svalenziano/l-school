document.addEventListener("DOMContentLoaded", (e) => {
  let msgBox = document.querySelector('textarea');
  const charCount = document.querySelector('.counter');

  function updateCounter() {
    const MAX_CHARS = 140;
    const charsRemaining = MAX_CHARS - msgBox.value.length;
    charCount.textContent = `${charsRemaining} characters remaining`;

    if (charsRemaining < 0) {
      msgBox.classList.add("invalid");
    } else {
      msgBox.classList.remove("invalid");
    }
  }

  msgBox.addEventListener('keyup', updateCounter);
  updateCounter();
})