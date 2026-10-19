
document.addEventListener("DOMContentLoaded", function () {
    // Get the form from the HTML document
    const form = document.getElementById("biodata-form");

    // Stop if the form cannot be found
    if (!form) {
        console.error("Bio-data form not found.");
        return;
    }

    // Listen for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the page from refreshing
        event.preventDefault();

        // Let the browser check required fields and input types
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Get the values entered by the student
        const fullName = document
            .getElementById("full-name")
            .value.trim();

        const matricNumber = document
            .getElementById("matric-number")
            .value.trim();

        const email = document
            .getElementById("email")
            .value.trim();

        const phone = document
            .getElementById("phone")
            .value.trim();

        const dateOfBirth = document
            .getElementById("date-of-birth")
            .value;

        const gender = document
            .getElementById("gender")
            .value;

        const department = document
            .getElementById("department")
            .value.trim();

        const level = document
            .getElementById("level")
            .value;

        // Check that text fields contain actual text
        if (
            !fullName ||
            !matricNumber ||
            !email ||
            !phone ||
            !dateOfBirth ||
            !gender ||
            !department ||
            !level
        ) {
            alert("Please complete all fields before submitting.");
            return;
        }

        // Display a success message
        alert(
            "Form submitted successfully!\n\n" +
            "Student Name: " + fullName + "\n" +
            "Matric Number: " + matricNumber + "\n" +
            "Email: " + email
        );

        // Log the collected data for demonstration purposes
        console.log({
            fullName,
            matricNumber,
            email,
            phone,
            dateOfBirth,
            gender,
            department,
            level
        });
    });

    // Handle the Clear Form button
    form.addEventListener("reset", function () {
        console.log("Form has been cleared.");
    });
});
