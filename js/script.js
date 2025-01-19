console.log('JavaScript connected successfully.');

// Toggle Navbar Visibility
function toggleMenu() {
  const navbar = document.getElementById('navbar');
  navbar.classList.toggle('hidden');
}

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
