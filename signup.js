document.getElementById('signup-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert("Passwords don't match!");
        return;
    }

    // Store user data (in a real application, you'd send this to a server)
    const userData = {
        username: username,
        email: email
    };

    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to the user dashboard
    window.location.href = 'user.html';
});