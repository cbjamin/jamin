
function encode() {
    const input = document.getElementById('inputText').value;
    document.getElementById('output').textContent = btoa(input);
}
function decode() {
    const input = document.getElementById('inputText').value;
    try {
        document.getElementById('output').textContent = atob(input);
    } catch {
        document.getElementById('output').textContent = 'Invalid Base64 string';
    }
}
