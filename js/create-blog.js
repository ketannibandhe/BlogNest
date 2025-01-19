const blogs = JSON.parse(sessionStorage.getItem('blogs')) || [];
const blogForm = document.getElementById('blog-form');

blogForm.addEventListener('submit', function (event) {
  event.preventDefault();

  const username = document.getElementById('username').value.trim();
  const title = document.getElementById('title').value.trim();
  const description = document.getElementById('description').value.trim();

  if (!username || !title || !description) {
    alert('All fields are required!');
    return;
  }

  const blog = {
    username,
    title,
    description,
    date: new Date().toLocaleDateString(),
  };

  blogs.push(blog);
  sessionStorage.setItem('blogs', JSON.stringify(blogs));
  alert('Blog published successfully!');
  window.location.href = 'blogs.html';
});

let open_editor = document.querySelector("#open-editor");
open_editor.addEventListener("click",()=>{
  window.location.href = 'text-editor.html';
})

let dropBtn = document.querySelector(".dropbtn");
        let dropdownContent = document.querySelector(".dropdown-content");

        dropBtn.addEventListener('click', () => {
            // Check if the dropdown content is already visible
            if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none"; // Hide if visible
            } else {
                dropdownContent.style.display = "block"; // Show if hidden
            }
        });