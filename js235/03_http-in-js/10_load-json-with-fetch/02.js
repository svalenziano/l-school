async function getOpenIssuesCount() {
  try {
    const response = await fetch("https://www.example.org/bad_url")
    const data = await response.json();
    
    console.log(response.status)
    console.log(data['open_issues']);
  } catch (e) {
    console.log("The request could not be completed!");
  }

}

getOpenIssuesCount();