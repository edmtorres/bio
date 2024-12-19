// Get references to the button and message
const toggleButton = document.getElementById('toggleButton');
const message = document.getElementById('message');

// Add a click event listener to the button
if (toggleButton && message) {
  toggleButton.addEventListener('click', () => {
    if (message.style.display === 'none' || message.style.display === '') {
      message.style.display = 'block';
    } else {
      message.style.display = 'none';
    }
  });
}


// Function to load content from a file and display it in a specific element
function loadContent(file, elementId) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(elementId).textContent = data;
    })
    .catch(error => console.error('Error loading the file:', error));
}

// Load content for both About Me and Projects sections when the page is loaded
window.onload = function() {
  // About Me section
  loadContent('text/about.txt', 'about-text');
  loadContent('text/about-readmore.txt', 'about-more-text');

  // Projects section
  loadContent('text/project.txt', 'projects-text');
  loadContent('text/project-readmore.txt', 'projects-more-text');
};


// // Toggle Read More functionality for both About Me and Projects sections
// document.getElementById('read-more-about-btn').addEventListener('click', function() {
//   var moreText = document.getElementById('more-about-text');
//   if (moreText.style.display === 'none') {
//     moreText.style.display = 'block';
//     this.textContent = 'Read Less';
//   } else {
//     moreText.style.display = 'none';
//     this.textContent = 'Read More';
//   }
// });

// document.getElementById('read-more-projects-btn').addEventListener('click', function() {
//   var moreText = document.getElementById('more-projects-text');
//   if (moreText.style.display === 'none') {
//     moreText.style.display = 'block';
//     this.textContent = 'Read Less';
//   } else {
//     moreText.style.display = 'none';
//     this.textContent = 'Read More';
//   }
// });




// Get the elements for Projects section
const readMoreProjectsButton = document.getElementById("read-more-projects-btn");
const readLessProjectsButton = document.getElementById("read-less-projects-btn");
const moreProjectsText = document.getElementById("more-projects-text");

// Function to show "Read More" content in Projects
readMoreProjectsButton.addEventListener("click", () => {
  moreProjectsText.style.display = "block";  // Show the "Read More" content
  readMoreProjectsButton.style.display = "none";    // Hide "Read More" button
  readLessProjectsButton.style.display = "inline";  // Show "Read Less" button
});

// Function to hide "Read More" content in Projects
readLessProjectsButton.addEventListener("click", () => {
  moreProjectsText.style.display = "none";  // Hide the "Read More" content
  readMoreProjectsButton.style.display = "inline";  // Show "Read More" button
  readLessProjectsButton.style.display = "none";   // Hide "Read Less" button
});

// Get the elements for About Me section
const readMoreAboutButton = document.getElementById("read-more-about-btn");
const readLessAboutButton = document.getElementById("read-less-about-btn");
const moreAboutText = document.getElementById("more-about-text");

// Function to show "Read More" content in About Me
readMoreAboutButton.addEventListener("click", () => {
  moreAboutText.style.display = "block";  // Show the "Read More" content
  readMoreAboutButton.style.display = "none";    // Hide "Read More" button
  readLessAboutButton.style.display = "inline";  // Show "Read Less" button
});

// Function to hide "Read More" content in About Me
readLessAboutButton.addEventListener("click", () => {
  moreAboutText.style.display = "none";  // Hide the "Read More" content
  readMoreAboutButton.style.display = "inline";  // Show "Read More" button
  readLessAboutButton.style.display = "none";   // Hide "Read Less" button
});
