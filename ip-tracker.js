
document.getElementById('ipForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const ip = document.getElementById('ip').value;
    const resultDiv = document.getElementById('result');
    fetch(`https://ipapi.co/${ip}/json/`)
        .then(response => response.json())
        .then(data => {
            resultDiv.innerHTML = `
                <p><strong>IP:</strong> ${data.ip}</p>
                <p><strong>City:</strong> ${data.city}</p>
                <p><strong>Region:</strong> ${data.region}</p>
                <p><strong>Country:</strong> ${data.country_name}</p>
                <p><strong>ISP:</strong> ${data.org}</p>
                <p><strong>Timezone:</strong> ${data.timezone}</p>
            `;
        })
        .catch(err => {
            resultDiv.innerHTML = "<p style='color:red;'>Error retrieving data. Make sure the IP is correct.</p>";
        });
});
