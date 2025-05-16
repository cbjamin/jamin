
function generateHash() {
    const text = document.getElementById('text').value;
    const md5 = CryptoJS.MD5(text).toString();
    const sha1 = CryptoJS.SHA1(text).toString();
    const sha256 = CryptoJS.SHA256(text).toString();
    document.getElementById('output').textContent = 
        `MD5: ${md5}\nSHA1: ${sha1}\nSHA256: ${sha256}`;
}
