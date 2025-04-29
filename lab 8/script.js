document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent default form submission

    let valid = true;

    // Clear previous errors securely
    document.querySelectorAll('.error').forEach(span => {
      span.textContent = '';
    });

    // Fetch and sanitize inputs
    const sanitizeInput = (input) => input.replace(/[<>&"'`]/g, (char) => {
      const escapeMap = {
        '<': '&lt;',
        '>': '&gt;',
        '&': '&amp;',
        '"': '&quot;',
        "'": '&#x27;',
        '`': '&#x60;'
      };
      return escapeMap[char] || char;
    });

    const firstName = sanitizeInput(document.getElementById("firstName").value.trim());
    const lastName = sanitizeInput(document.getElementById("lastName").value.trim());
    const email = sanitizeInput(document.getElementById("email").value.trim());
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Empty field checks
    if (firstName === "") {
      document.getElementById("firstNameError").textContent = "First name is required.";
      valid = false;
    }
    if (lastName === "") {
      document.getElementById("lastNameError").textContent = "Last name is required.";
      valid = false;
    }
    if (email === "") {
      document.getElementById("emailError").textContent = "Email is required.";
      valid = false;
    }
    if (password === "") {
      document.getElementById("passwordError").textContent = "Password is required.";
      valid = false;
    }
    if (confirmPassword === "") {
      document.getElementById("confirmPasswordError").textContent = "Please confirm your password.";
      valid = false;
    }

    // Email validation
    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    if (email && !emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email address.";
      valid = false;
    }

    // Password match check
    if (password && confirmPassword && password !== confirmPassword) {
      document.getElementById("confirmPasswordError").textContent = "Passwords do not match.";
      valid = false;
    }

    if (valid) {
      alert("Form submitted successfully!");
      // Optionally send data to the server here using fetch/AJAX
    }
  });
});
