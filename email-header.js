
function analyzeHeader() {
    const input = document.getElementById("headerInput").value;
    const output = document.getElementById("headerOutput");
    const lines = input.split(/\r?\n/).filter(Boolean);
    const results = {};
    lines.forEach(line => {
        const [key, ...rest] = line.split(": ");
        if (key && rest.length) {
            results[key] = rest.join(": ");
        }
    });
    output.textContent = JSON.stringify(results, null, 2);
}
