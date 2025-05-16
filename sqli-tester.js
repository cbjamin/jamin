
function testSQL() {
  const payloads = ["' OR '1'='1", "'; DROP TABLE users; --", "' OR 1=1 --"];
  const input = document.getElementById("input").value;
  const output = document.getElementById("output");
  const results = payloads.map(p => input + p);
  output.textContent = "Try these payloads:\n" + results.join("\n");
}
