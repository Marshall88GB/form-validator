const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

console.log(form)

let isValid = false;
let passwordMatch = false;

function validateForm() {
    // Using Api
    isValid = form.checkValidity();
    if (!isValid) {
        message.textContent = 'please fill out all fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check to see password match
    if (password1El.value === password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure password match';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.borderColor = 'red';
        password2El.borderColor = 'red';
        return;
    }
    // If form is valid
    if (isValid && passwordMatch) {
        message.textContent = 'Successfully Registered!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';

    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value,
    };
    // User data
    console.log(user)
}

function processFormData(e) {
    e.preventDefault();
    validateForm();
    // Submit data if Valid
    if (isValid && passwordMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);
