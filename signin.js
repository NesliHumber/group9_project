document.getElementById('signin-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Retrieve stored user data
    const storedUserData = JSON.parse(localStorage.getItem('userData'));

    if (storedUserData && storedUserData.email === email) {
        // In a real application, you would verify the password here
        // For this example, we're just checking if the email exists
        localStorage.setItem('currentUser', JSON.stringify(storedUserData));
        window.location.href = 'user.html';
    } else {
        alert('Invalid email or password');
    }
});