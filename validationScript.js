// JavaScript code for form validation
// Prevent form from submitting
document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.getElementById("inputField");
    const form = document.getElementById("myForm");
    
    form.addEventListener("submit", function (event) {
        event.preventDefault();
    
        // Retrieve the input field value
        const inputValue = inputField.value.trim();
        // Regular expression pattern for alphanumeric input
        const alphanumericPattern = /^[a-zA-Z0-9]+$/;
    
        // Check if the input value matches the pattern
        if (alphanumericPattern.test(inputValue)) {
            // Valid input: display confirmation and submit the form
            alert("Form submitted successfully!");
            form.reset();
        } 
        else {
            // Invalid input: display error message
            alert("ERROR: Input must be alphanumeric (a-z, A-Z, 0-9). Please try again!");
        }
    });
    });
          