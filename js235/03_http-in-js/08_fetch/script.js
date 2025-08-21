document.addEventListener("DOMContentLoaded", async () => {
  let store = document.getElementById('store');
  let response = await fetch('https://ls-230-web-store-demo.herokuapp.com/products');
  store.innerHTML = await response.text();
})