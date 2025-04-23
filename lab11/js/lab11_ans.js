// Global variables for username validation
var el = document.getElementById('username');     // Username input
var elMsg = document.getElementById('feedback');  // Element to hold message

// Username validation functions
function checkUsername() {                        // Declare function
  var username = el.value;                        // Store username in variable
  if (username.length < 5) {                      // If username < 5 characters
    elMsg.className = 'warning';                  // Change class on message
    elMsg.textContent = 'too short...';           // Update message
  } else {                                        // Otherwise
    elMsg.textContent = '';                       // Clear the message
  }
}

function tipUsername() {                          // Declare function
  elMsg.className = 'tip';                        // Change class for message
  elMsg.textContent = 'Username must be at least 5 characters'; // Add message
}

// Credentials display functionality
function showCredentials(event) {
  // Prevent form submission for demonstration purposes
  event.preventDefault();
  
  var username = el.value;
  var password = document.getElementById('password').value;
  var checkbox = document.getElementById('checkbox');
  
  // Validate that terms are accepted
  if (!checkbox.checked) {
    alert("Please agree to the terms and conditions");
    return;
  }
  
  // Validate username length
  if (username.length < 5) {
    alert("Username must be at least 5 characters");
    return;
  }
  
  // Show credentials (in real app, you wouldn't show password)
  alert("Account Details:\nUsername: " + username + "\nPassword: " + password);
}

// Event listeners
el.addEventListener('focus', tipUsername, false); // focus call tipUsername()
el.addEventListener('blur', checkUsername, false); // blur call checkUsername()
document.getElementById('submit').addEventListener('click', showCredentials, false);