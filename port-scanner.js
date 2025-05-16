
document.getElementById("portForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const host = document.getElementById("host").value;
    const result = document.getElementById("portResult");
    result.textContent = "Scanning...";
    fetch(`https://api.hackertarget.com/nmap/?q=${host}`)
        .then(res => res.text())
        .then(data => result.textContent = data)
        .catch(() => result.textContent = "Error scanning ports.");
});
