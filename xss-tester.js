
function testXSS() {
  const input = document.getElementById("xssInput").value;
  const div = document.getElementById("xssResult");
  div.innerHTML = "<strong>Rendered Output:</strong><br>" + input;
}
