let output = document.querySelector("#message");

document.addEventListener('click', (e) => {
  output.textContent = e.target.textContent;
})