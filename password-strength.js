
document.getElementById('password').addEventListener('input', function() {
    const pwd = this.value;
    const output = document.getElementById('output');
    let score = 0;
    if (pwd.length >= 8) score++;
    if (/[A-Z]/.test(pwd)) score++;
    if (/[0-9]/.test(pwd)) score++;
    if (/[^A-Za-z0-9]/.test(pwd)) score++;
    const strengths = ['Very Weak', 'Weak', 'Moderate', 'Strong', 'Very Strong'];
    output.textContent = "Strength: " + strengths[score];
});
