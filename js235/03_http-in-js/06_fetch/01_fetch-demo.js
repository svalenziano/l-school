async function fetchDemo() {
  console.log("Sending request")
  const response = await fetch('https://ls-230-xhr-demo.herokuapp.com/status/200');
  console.log("Response received!")
  console.log(response instanceof Response);  // true
  console.log(response instanceof Object);    // true
  console.log(response.status);               // 200
  console.log(response.body);                 // ReadableStream { ... }
  
  console.log("Parsing body...")
  const responseBody = await response.text();
  console.log("...parsed body!")
  console.log(responseBody)                   // "This is a 200 response"
}

fetchDemo();