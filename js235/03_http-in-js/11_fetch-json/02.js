async function createNew({name, sku, price}) {
  const response = await fetch("https://ls-230-web-store-demo.herokuapp.com/v1/products", {
    method: "POST",
    body: JSON.stringify({name, sku, price}),
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Authorization": "token AUTH_TOKEN",
    }
  })

  if (response.ok) {
    console.log(`Success! Record created: ${await response.text()}`);
  } else {
    console.log("FAILURE")
    const detailed = await response.json();
    for (let key in detailed) {
      console.log(`${key}: ${detailed[key]}`)
    }
  }
}

createNew({name: "The Quick Brown Fox 1", sku:"TQBF1", price: "98765"});