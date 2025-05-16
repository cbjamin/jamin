
document.getElementById('dnsForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const domain = document.getElementById('domain').value;
    const result = document.getElementById('dnsResult');
    result.textContent = "Loading...";
    fetch(`https://dns.google/resolve?name=${domain}`)
      .then(res => res.json())
      .then(data => {
          result.textContent = JSON.stringify(data.Answer || "No records found", null, 2);
      })
      .catch(() => result.textContent = "Error fetching DNS data.");
});
