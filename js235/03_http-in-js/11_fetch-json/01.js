async function postJSON() {
  const response = await fetch('https://lsjs230-book-catalog.herokuapp.com/books', {
    method: "POST",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify({
      title: 'Eloquent Javascript', 
      author: 'Marijn Haverbeke',
    })
  })

  if (response.status >= 200 && response.status < 300) {
    console.log(`Success! Added to catalog: ${await response.text()}`)
  } else {
    console.log(response)
  }
}

postJSON();