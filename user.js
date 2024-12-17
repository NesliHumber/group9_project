document.addEventListener('DOMContentLoaded', function() {
    // Check if user is logged in
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
        // If not logged in, redirect to sign-in page
        window.location.href = 'signin.html';
    } else {
        // Display user info
        const userInfoDiv = document.getElementById('user-info');
        userInfoDiv.innerHTML = `
            <p><strong>Name:</strong> ${currentUser.name}</p>
            <p><strong>Email:</strong> ${currentUser.email}</p>
        `;
    }

    // Add event listener to sign-out button
    const signoutButton = document.getElementById('signout-button');
    signoutButton.addEventListener('click', function() {
        // Clear user data from local storage
        localStorage.removeItem('currentUser');
        // Redirect to sign-in page
        window.location.href = 'signin.html';
    });
});