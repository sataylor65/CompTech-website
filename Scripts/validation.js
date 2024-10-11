document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous error messages
    document.getElementById('nameError').textContent = '';
    document.getElementById('emailError').textContent = '';
    document.getElementById('messageError').textContent = '';

    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    let isValid = true;

    // Validate name
    if (name.trim() === '') {
        document.getElementById('nameError').textContent = 'Name is required.';
        isValid = false;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email.trim() === '') {
        document.getElementById('emailError').textContent = 'Email is required.';
        isValid = false;
    } else if (!emailPattern.test(email)) {
        document.getElementById('emailError').textContent = 'Invalid email format.';
        isValid = false;
    }

    // Validate message
    if (message.trim() === '') {
        document.getElementById('messageError').textContent = 'Message is required.';
        isValid = false;
    }

    // If all fields are valid, submit the form
    if (isValid) {
        alert('Form submitted successfully!');
        // We can add code to actually submit the form here, e.g., using server-side language like PHP, Node.js or AJAX.
        console.log(name);
        console.log(email);
        console.log(message);
        document.getElementById('contactForm').reset(); // Clear the form
        
    }
});