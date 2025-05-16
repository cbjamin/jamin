
document.getElementById("subForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const domain = document.getElementById("domain").value;
    const result = document.getElementById("subResult");
    result.textContent = "Scanning...";
    fetch(`https://api.hackertarget.com/hostsearch/?q=${domain}`)
        .then(res => res.text())
        .then(data => {
            result.textContent = data || "No subdomains found.";
        })
        .catch(() => result.textContent = "Error fetching subdomain data.");
});
