
document.getElementById('whoisForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const domain = document.getElementById('domain').value;
  const result = document.getElementById('whoisResult');
  result.textContent = "Loading...";
  fetch(`https://api.api-ninjas.com/v1/whois?domain=${domain}`, {
    headers: { 'X-Api-Key': 'YOUR_API_KEY_HERE' }
  })
    .then(res => res.json())
    .then(data => {
      result.textContent = JSON.stringify(data, null, 2);
    })
    .catch(() => {
      result.textContent = "Error fetching Whois data.";
    });
});
