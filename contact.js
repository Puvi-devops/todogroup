
// Get Feedback Form
const feedbackForm = document.getElementById("feedbackForm");

const feedbackMessage = document.getElementById("feedbackMessage");

// Handle Form Submission
feedbackForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    if (name === "") {
        return;
    }

    // Display Success Message
    feedbackMessage.textContent =
        "Thank you, " + name + "! Your feedback has been received.";

    // Clear Form
    feedbackForm.reset();

});
