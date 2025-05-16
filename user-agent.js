
document.getElementById("ua").textContent = JSON.stringify({
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language
}, null, 2);
