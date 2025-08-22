document.addEventListener("DOMContentLoaded", async () => {
  let $store = document.getElementById('store');
  let response = await fetch('https://ls-230-web-store-demo.herokuapp.com/products');
  $store.innerHTML = await response.text();

  $store.addEventListener("click", async (event) => {
    event.preventDefault();
    target = event.target;
    if (target.tagName !== "A") return;
    
    const url = 'https://ls-230-web-store-demo.herokuapp.com' + target.getAttribute("href")
    const response = await fetch(url);
    $store.innerHTML = await response.text();
  })

})