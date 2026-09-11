const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const detailsInput = document.querySelector("#item-details");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const detailsError = document.querySelector("#details-error");

const validationRules = {
    minimumNameLength: 2,
    minimumDetailsLength: 10
};

const validation

function validateName() {
    const name = nameInput.value.trim();

if (name.length < validationRules.minimumNameLength) {
    nameError.textContent =
    "Please enter at least 2 characters for your name.";
    return false;
}

    nameError.textContent = "";
    return true;
}

function validateEmail() {
    if (!emailInput.validity.valid) {
    emailError.textContent = "Please enter a valid email address.";
    return false;
    }

    emailError.textContent = "";
    return true;
}

function validateDetails() {
    const details = detailsInput.value.trim();

    if (details.length < validationRules.minimumDetailsLength) {
    detailsError.textContent =
    "Please enter at least 10 characters about your request.";
    return false;
    }

    detailsError.textContent = "";
    return true;
}

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    validateName();
    validateEmail();
    validateDetails();
});

const savedName = localStorage.getItem("customerName");
    if(savedName) {
            nameInput.value = savedName;
        }
        
    nameInput.addEventListener("input", function() {
        localStorage.setItem("customerName", nameInput.value);
    });