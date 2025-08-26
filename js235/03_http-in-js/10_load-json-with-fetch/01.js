async function getOpenIssuesCount() {
  const response = await fetch("https://api.github.com/repos/rails/rails", {
    headers: {
      "Content-Type": "application/json; encoding: utf-8"
    }
  })
  console.log(response.status)
  
  const data = await response.json();
  console.log(data['open_issues']);
}

getOpenIssuesCount();