function handleContact() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const msg = document.getElementById('message').value.trim();

    // 1. Check if all fields are filled
    if (!name || !email || !msg) {
        alert("Validation Error: Please fill out all fields before submitting.");
        return; // Stops the function here
    }

    // 2. Check if the email specifically contains "@gmail.com"
    if (!email.toLowerCase().endsWith("@gmail.com")) {
        alert("Access Denied: Please use a valid @gmail.com address.");
        return; // Stops the function here
    }

    // 3. Success condition
    alert("Receipt Acknowledged!\n\nThank you, " + name + ". Your Gmail has been verified and your message received.");
    
    // Clear the form
    document.getElementById('contactForm').reset();
}