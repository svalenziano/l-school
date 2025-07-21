document.querySelector("#toggle").setAttribute("onclick", (e) => {
  e.preventDefault();
  document.querySelector("#notice").classList.toggle("hidden");
});