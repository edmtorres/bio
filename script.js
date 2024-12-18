// Get references to the button and message
const toggleButton = document.getElementById('toggleButton');
const message = document.getElementById('message');

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
  // Toggle the message visibility
  if (message.style.display === 'none' || message.style.display === '') {
    message.style.display = 'block'; // Show the message
  } else {
    message.style.display = 'none'; // Hide the message
  }
});


// Function to load the static content from about.txt and expandable content from about-readmore.txt
function loadAboutText() {
  // Fetch the static content from about.txt
  fetch('about.txt')
    .then(response => response.text())  // Parse the file as text
    .then(staticContent => {
      // Format the content with paragraph tags for each line break
      const formattedStaticContent = formatText(staticContent);
      const staticTextElement = document.getElementById("static-text");
      staticTextElement.innerHTML = formattedStaticContent;
    })
    .catch(error => console.error("Error loading static text:", error));

  // Fetch the expandable content from about-readmore.txt
  fetch('about-readmore.txt')
    .then(response => response.text())  // Parse the file as text
    .then(expandableContent => {
      // Format the content with paragraph tags for each line break
      const formattedExpandableContent = formatText(expandableContent);
      const moreTextElement = document.getElementById("more-text");
      moreTextElement.innerHTML = formattedExpandableContent;  // Set the full content hidden initially
    })
    .catch(error => console.error("Error loading expandable text:", error));
}

// Function to replace newline characters with <p> tags for paragraphs or <br> for line breaks
function formatText(text) {
  // Split the text by newline characters and wrap each paragraph in <p> tags
  return text.split('\n').map(line => `<p>${line}</p>`).join('');
}

// Toggle the visibility of the extra text
function toggleText() {
  const moreText = document.getElementById("more-text");
  const btn = document.getElementById("read-more-btn");

  if (moreText.style.display === "none") {
    moreText.style.display = "inline";
    btn.innerHTML = "Read Less";
  } else {
    moreText.style.display = "none";
    btn.innerHTML = "Read More";
  }
}

// Load the content when the page is loaded
window.onload = loadAboutText;
