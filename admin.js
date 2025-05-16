
function login() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "Jamin" && pass === "AMISHAjamin0786") {
    localStorage.setItem("isAdmin", "true");
    document.getElementById("loginBox").style.display = "none";
    document.getElementById("adminPanel").style.display = "block";
    loadPosts();
  } else {
    alert("Invalid credentials");
  }
}

function postContent() {
  const post = document.getElementById("postText").value;
  if (!post) return;
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts.unshift({ text: post, likes: 0 });
  localStorage.setItem("posts", JSON.stringify(posts));
  document.getElementById("postText").value = "";
  loadPosts();
}

function loadPosts() {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  const list = document.getElementById("postsList");
  list.innerHTML = "<h4>Your Posts</h4>";
  posts.forEach((p, i) => {
    list.innerHTML += `<div><strong>Post #${posts.length - i}</strong><br>${p.text}<hr></div>`;
  });
}

if (localStorage.getItem("isAdmin") === "true") {
  document.getElementById("loginBox").style.display = "none";
  document.getElementById("adminPanel").style.display = "block";
  loadPosts();
}
