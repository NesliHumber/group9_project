// Handle setting availability
function setAvailability() {
    const availability = document.getElementById('availability').value;
    if (availability) {
        document.getElementById('availabilityMessage').textContent = `Your availability has been set for: ${new Date(availability).toLocaleString()}`;
    } else {
        document.getElementById('availabilityMessage').textContent = 'Please select a valid date and time.';
    }
}

// Handle booking swap sessions
document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const bookingDate = document.getElementById('bookingDate').value;
    const bookingTime = document.getElementById('bookingTime').value;

    if (bookingDate && bookingTime) {
        const sessionTime = `${bookingDate} at ${bookingTime}`;
        document.getElementById('bookingMessage').textContent = `You have requested a swap session for: ${sessionTime}. You will receive an email confirmation shortly.`;
        
        // Call backend service for email notifications
        sendEmailNotification(sessionTime); // Placeholder for email functionality
    } else {
        document.getElementById('bookingMessage').textContent = 'Please select a valid date and time for your session.';
    }
});

// Placeholder for sending email notification (integration with backend needed)
function sendEmailNotification(sessionTime) {
    // In a real application, you would integrate an email API like SendGrid, NodeMailer, or a backend service
    console.log(`Sending email notification for session: ${sessionTime}`);
    // Example message
    document.getElementById('emailMessage').textContent = `A confirmation email for your swap session on ${sessionTime} has been sent.`;
}
