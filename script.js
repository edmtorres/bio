// Get references to the button and message
const toggleButton = document.getElementById('toggleButton');
const message = document.getElementById('message');

// Add a click event listener to the button
toggleButton.addEventListener('click', () => {
  // Check if the message is currently displayed
  if (message.style.display === 'none' || message.style.display === '') {
    message.style.display = 'block'; // Show the message
  } else {
    message.style.display = 'none'; // Hide the message
  }
});
