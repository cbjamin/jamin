
const commonPaths = ["admin", "administrator", "login", "admin.php", "admin/login"];
function findPanels() {
  const base = document.getElementById("domain").value;
  const results = document.getElementById("results");
  results.innerHTML = "Scanning...";
  Promise.all(commonPaths.map(path =>
    fetch(base + "/" + path).then(res => ({ path, ok: res.ok })).catch(() => ({ path, ok: false }))
  )).then(data => {
    results.innerHTML = "";
    data.forEach(({ path, ok }) => {
      const li = document.createElement("li");
      li.textContent = `${base}/${path} - ${ok ? "Found" : "Not Found"}`;
      results.appendChild(li);
    });
  });
}
