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

// Toggle Read More functionality for both About Me and Projects sections
const readMoreAboutBtn = document.getElementById('read-more-about-btn');
if (readMoreAboutBtn) {
  readMoreAboutBtn.addEventListener('click', function() {
    var moreText = document.getElementById('more-about-text');
    if (moreText.style.display === 'none') {
      moreText.style.display = 'block';
      this.textContent = 'Read Less';
    } else {
      moreText.style.display = 'none';
      this.textContent = 'Read More';
    }
  });
}