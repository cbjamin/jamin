
function loadPublicPosts() {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  const container = document.getElementById("visitorPosts");
  container.innerHTML = "";
  posts.forEach((p, i) => {
    container.innerHTML += `
      <div>
        <strong>Post #${posts.length - i}</strong><br>
        ${p.text}<br>
        <button onclick="likePost(${i})">Like</button>
        <span id="like-${i}">${p.likes}</span> likes
        <hr>
      </div>`;
  });
}

function likePost(index) {
  const posts = JSON.parse(localStorage.getItem("posts") || "[]");
  posts[index].likes += 1;
  localStorage.setItem("posts", JSON.stringify(posts));
  document.getElementById("like-" + index).textContent = posts[index].likes;
}

loadPublicPosts();
