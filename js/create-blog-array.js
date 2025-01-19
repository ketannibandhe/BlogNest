// Get blogs from sessionStorage or use an empty array if none exist
let blogs = JSON.parse(sessionStorage.getItem('blogs')) || [];

// Select the blog list container
const blogList = document.getElementById('blog-list');

// Function to display blogs on the page
function displayBlogs(blogsToDisplay) {
  // Clear any existing content
  blogList.innerHTML = '';

  // Check if there are blogs to display
  if (blogsToDisplay.length === 0) {
    blogList.innerHTML = '<p>No blogs available yet. Please create a blog!</p>';
  } else {
    // Loop through the blogs and add them to the page
    blogsToDisplay.forEach(blog => {
      const blogCard = document.createElement('div');
      blogCard.className = 'blog-card'; // Add a class for styling
      blogCard.innerHTML = `
        <h2>${blog.title}</h2>
        <p class="blog-meta">By ${blog.username} on ${blog.date}</p>
        <div class="blog-description">${blog.description}</div>
      `;
      blogList.appendChild(blogCard);
    });
  }
}

// Display all blogs when the page loads
displayBlogs(blogs);

// Show or hide the navbar when the mouse moves
document.addEventListener('mousemove', (event) => {
  const navbar = document.querySelector('.hidden-navbar'); // Get the navbar
  const heading = document.getElementById('blog-heading'); // Get the heading section

  if (event.clientY < 50) {
    // If the mouse is near the top, show the navbar
    navbar.style.top = '0';
    heading.style.opacity = '0'; // Hide the heading
  } else {
    // If the mouse is away from the top, hide the navbar
    navbar.style.top = '-60px';
    heading.style.opacity = '1'; // Show the heading
  }
});

// Add a search bar
const searchInput = document.createElement('input');
searchInput.type = 'text'; // Input type is text
searchInput.placeholder = 'Search by username or title...'; // Placeholder text
searchInput.className = 'search-input'; // Add a class for styling
document.querySelector('main').insertBefore(searchInput, blogList); // Add the search bar above the blog list

// Search functionality
searchInput.addEventListener('input', (event) => {
  const searchTerm = event.target.value.toLowerCase(); // Convert input to lowercase
  const filteredBlogs = blogs.filter(blog => {
    // Check if the search term matches the title or username
    return blog.title.toLowerCase().includes(searchTerm) || 
           blog.username.toLowerCase().includes(searchTerm);
  });
  displayBlogs(filteredBlogs); // Show only the filtered blogs
});

// Add a dropdown for sorting
const sortDropdown = document.createElement('select');
sortDropdown.className = 'sort-dropdown'; // Add a class for styling
sortDropdown.innerHTML = `
  <option value="">Sort by</option>
  <option value="date-asc">Date (Oldest First)</option>
  <option value="date-desc">Date (Newest First)</option>
  <option value="title-asc">Title (A-Z)</option>
  <option value="title-desc">Title (Z-A)</option>
`;
document.querySelector('main').insertBefore(sortDropdown, blogList); // Add the dropdown above the blog list

// Sort functionality
sortDropdown.addEventListener('change', (event) => {
  const sortOption = event.target.value; // Get the selected option
  let sortedBlogs = [...blogs]; // Copy the blogs array

  // Sort the blogs based on the selected option
  if (sortOption === 'date-asc') {
    sortedBlogs.sort((a, b) => new Date(a.date) - new Date(b.date)); // Oldest to newest
  } else if (sortOption === 'date-desc') {
    sortedBlogs.sort((a, b) => new Date(b.date) - new Date(a.date)); // Newest to oldest
  } else if (sortOption === 'title-asc') {
    sortedBlogs.sort((a, b) => a.title.localeCompare(b.title)); // Alphabetical order
  } else if (sortOption === 'title-desc') {
    sortedBlogs.sort((a, b) => b.title.localeCompare(a.title)); // Reverse alphabetical order
  }

  displayBlogs(sortedBlogs); // Show the sorted blogs
});

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
