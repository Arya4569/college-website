// Feedback form
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("feedbackForm");
    const list = document.getElementById("feedbackList");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            const name = document.getElementById("name").value;
            const rating = document.getElementById("rating").value;
            const message = document.getElementById("message").value;

            const div = document.createElement("div");
            div.innerHTML = `<strong>${name}</strong> <br> ${rating} <br> ${message}`;

            list.appendChild(div);
            form.reset();
        });
    }
});

// Contact alert
function contactAlert() {
    alert("Message sent successfully!");
    return false;
}
