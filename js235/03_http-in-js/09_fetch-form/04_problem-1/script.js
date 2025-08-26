document.addEventListener("DOMContentLoaded", async () => {
  let $store = document.getElementById('store');
  let response = await fetch('https://ls-230-web-store-demo.herokuapp.com/products');
  $store.innerHTML = await response.text();

  $store.addEventListener("click", async (event) => {
    event.preventDefault();
    const url = 'https://ls-230-web-store-demo.herokuapp.com' 

    target = event.target;

    if (target instanceof HTMLButtonElement && target.textContent === 'Save') {
      // sent POST fetch
      response = await fetch(url, {
        'method': 'POST'
      })
      // what is the endpoint?

      // if successful, update

      // else log error message
      
      return;
    }

    if (target.tagName !== "A") return;
    
    url += target.getAttribute("href");
    const response = await fetch(url);
    $store.innerHTML = await response.text();
  })

})