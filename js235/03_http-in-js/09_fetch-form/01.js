async function postURLEncoded(data) {
  const response = await fetch('https://lsjs230-book-catalog.herokuapp.com/books', {
    method: 'POST',
    headers: {
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"
    },
    body: data,
  });

  if (response.status === 201) {
    console.log(`This book was added to the catalog: ${await response.text()}`)
  }
}

let data = 'title=Effective%20JavaScript&author=David%20Herman';
postURLEncoded(data);


// (async () => console.log(await postURLEncoded(data)))();