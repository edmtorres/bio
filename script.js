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


// Fetch the content from the about.txt file
fetch('about.txt')
  .then(response => response.text()) // Get the text content
  .then(data => {
    // Insert the text into the #about-text div
    document.getElementById('about-text').innerText = data;
  })
  .catch(error => console.error('Error fetching About Me content:', error));

