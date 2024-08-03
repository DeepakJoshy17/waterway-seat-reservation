document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginForm = document.querySelector('form');
    const submitBtn = document.getElementById('submitBtn'); // Select the submit button

    emailInput.addEventListener('input', validateEmail);
    passwordInput.addEventListener('input', validatePassword);
    loginForm.addEventListener('submit', handleSubmit);

    // Add event listener for input fields
    function validateEmail() {
        const value = emailInput.value.trim();
        if (!/\S+@\S+\.\S+/.test(value)) {
            showError(emailInput, 'Please enter a valid email address.');
        } else {
            showSuccess(emailInput);
        }
        enableDisableSubmitButton(); // Enable or disable submit button based on form validity
    }

    function validatePassword() {
        const value = passwordInput.value;
        if (value === '') {
            showError(passwordInput, 'Please enter a password.');
        } else {
            showSuccess(passwordInput);
        }
        enableDisableSubmitButton(); // Enable or disable submit button based on form validity
    }

    function handleSubmit(event) {
        event.preventDefault(); // Prevent default form submission

        // Validate email and password before submitting
        validateEmail();
        validatePassword();

        // Check if both email and password are valid
        const isValidEmail = emailInput.classList.contains('is-valid');
        const isValidPassword = passwordInput.classList.contains('is-valid');

        if (isValidEmail && isValidPassword) {
            // If both email and password are valid, submit the form
            this.submit();
        }
    }

    function showError(inputElement, message) {
        const feedbackElement = inputElement.nextElementSibling;
        inputElement.classList.remove('is-valid');
        inputElement.classList.add('is-invalid');
        feedbackElement.textContent = message;
    }

    function showSuccess(inputElement) {
        const feedbackElement = inputElement.nextElementSibling;
        inputElement.classList.remove('is-invalid');
        inputElement.classList.add('is-valid');
        feedbackElement.textContent = '';
    }

    function enableDisableSubmitButton() {
        const isValidEmail = emailInput.classList.contains('is-valid');
        const isValidPassword = passwordInput.classList.contains('is-valid');

        if (isValidEmail && isValidPassword) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }
});
