
document.addEventListener('DOMContentLoaded', function() {
    const signUpForm = document.getElementById('signup-form');
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');
    const phoneNumberInput = document.getElementById('phoneNumber');
    const emailInput = document.getElementById('email');
    const genderInput = document.getElementById('gender');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const submitBtn = document.getElementById('submitBtn'); // Select the submit button

    // Add event listeners for input fields
    firstNameInput.addEventListener('input', validateForm);
    lastNameInput.addEventListener('input', validateForm);
    phoneNumberInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    genderInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
    confirmPasswordInput.addEventListener('input', validateForm);

    // Add event listener for form submission
    signUpForm.addEventListener('submit', function(event) {
        if (!isFormValid()) {
            event.preventDefault(); // Prevent form submission if the form is not valid
            // Optionally, you can display a message to the user indicating that there are validation errors.
        }
    });

    // Validation functions...
    function validateForm() {
        const isValid = (
            validateFirstName() &&
            validateLastName() &&
            validatePhoneNumber() &&
            validateEmail() &&
            validateGender() &&
            validatePassword() &&
            validateConfirmPassword()
        );

        // Enable or disable the submit button based on form validity
        if (isValid) {
            submitBtn.removeAttribute('disabled');
        } else {
            submitBtn.setAttribute('disabled', 'disabled');
        }
    }

    function validateFirstName() {
        const value = firstNameInput.value.trim();
        if (value === '') {
            showError(firstNameInput, 'Please enter your first name.');
            return false;
        } else if (/\d/.test(value)) {
            showError(firstNameInput, 'First name cannot contain numbers.');
            return false;
        } else {
            showSuccess(firstNameInput);
            return true;
        }
    }
    
    function validateLastName() {
        const value = lastNameInput.value.trim();
        if (value === '') {
            showError(lastNameInput, 'Please enter your last name.');
            return false;
        } else if (/\d/.test(value)) {
            showError(lastNameInput, 'Last name cannot contain numbers.');
            return false;
        } else {
            showSuccess(lastNameInput);
            return true;
        }
    }
    
    function validatePhoneNumber() {
        const value = phoneNumberInput.value.trim();
        if (!/^\d{10}$/.test(value)) {
            showError(phoneNumberInput, 'Please enter a valid 10-digit phone number.');
            return false;
        } else {
            showSuccess(phoneNumberInput);
            return true;
        }
    }

    function validateEmail() {
        const value = emailInput.value.trim();
        if (!/\S+@\S+\.\S+/.test(value)) {
            showError(emailInput, 'Please enter a valid email address.');
            return false;
        } else {
            showSuccess(emailInput);
            return true;
        }
    }

    function validateGender() {
        const value = genderInput.value.trim();
        if (value === '') {
            showError(genderInput, 'Please select your gender.');
            return false;
        } else {
            showSuccess(genderInput);
            return true;
        }
    }

    function validatePassword() {
        const value = passwordInput.value;
        if (value === '') {
            showError(passwordInput, 'Please enter a password.');
            return false;
        } else {
            showSuccess(passwordInput);
            return true;
        }
    }

    function validateConfirmPassword() {
        const passwordValue = passwordInput.value;
        const confirmPasswordValue = confirmPasswordInput.value;
        if (confirmPasswordValue !== passwordValue) {
            showError(confirmPasswordInput, 'Passwords do not match.');
            return false;
        } else {
            showSuccess(confirmPasswordInput);
            return true;
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

    function isFormValid() {
        // Check if all input fields are valid
        const isValid = (
            validateFirstName() &&
            validateLastName() &&
            validatePhoneNumber() &&
            validateEmail() &&
            validateGender() &&
            validatePassword() &&
            validateConfirmPassword()
        );

        return isValid;
    }
});
