document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded!"); // Debugging

    let selectedRating = 0; // Initialize rating

    document.querySelectorAll(".star").forEach((star, index) => {
        star.addEventListener("click", function () {
            selectedRating = index + 1; // Set rating
            console.log("Selected Rating:", selectedRating); // Debugging
            document.querySelectorAll(".star").forEach((s, i) => {
                s.classList.toggle("selected", i < selectedRating);
            });
        });
    });

    document.getElementById("feedbackform").addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent default form submission

        console.log("Submit event triggered!"); // Debugging

        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let feedback = document.getElementById("feedbacktxt").value;

        // Validation
        if (!name || !email || !feedback) {
            alert("Please fill all required fields!");
            return;
        }

        if (selectedRating === 0) {
            alert("Please select a rating.");
            return;
        }

        alert(`Thank you, ${name}! Your feedback has been submitted.`);
        
        document.getElementById("feedbackform").reset();
        selectedRating = 0;
        document.querySelectorAll(".star").forEach(star => star.classList.remove("selected"));
    });
});
