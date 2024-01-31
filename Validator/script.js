// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip");
const password = document.getElementById("password");
const passwordConfirm = document.getElementById("password-confirm");

const emailError = document.querySelector("#email + span.error");
const countryError = document.querySelector("#countries + span.error");
const zipError = document.querySelector("#zip + span.error");
const passwordError = document.querySelector("#password + span.error");
const passwordConfirmError = document.querySelector(
  "#password-confirm + span.error"
);
let valid = false;

showError(emailError, email.validationMessage);
showError(countryError, "Please enter a valid country");
showError(zipError, "Please enter a valid zip code");
showError(passwordError, "Please enter a valid password");
showError(passwordConfirmError, "Please enter a valid password");

showValidatorSymbol(emailError, false);
showValidatorSymbol(countryError, false);
showValidatorSymbol(zipError, false);
showValidatorSymbol(passwordError, false);
showValidatorSymbol(passwordConfirmError, false);

function showValidatorSymbol(element, valid) {
  if (valid) {
    element.textContent = "\u2713"; // tick mark
    element.style.backgroundColor = "green";
  } else {
    element.textContent = "\u2717"; // cross mark
    element.style.backgroundColor = "red";
  }
}

email.addEventListener("input", (event) => {
  // Each time the user types something, we check if the
  // form fields are valid.

  if (email.validity.valid) {
    showValidatorSymbol(emailError, true);
    hideError(emailError);
    valid = true;
  } else {
    showValidatorSymbol(emailError, false);
    showError(emailError, email.validationMessage);
    valid = false;
  }
});

const validCountries = [];

fetch("https://restcountries.com/v3.1/all?fields=name,flags")
  .then((response) => response.json())
  .then((data) => {
    const countryDatalist = document.getElementById("countries");
    data.sort((a, b) => a.name.common.localeCompare(b.name.common));
    data.forEach((country) => {
      validCountries.push(country.name.common);
      const option = document.createElement("option");
      option.value = country.name.common;
      countryDatalist.appendChild(option);
    });
  });

country.addEventListener("input", (event) => {
  if (
    validCountries
      .map((c) => c.toLowerCase())
      .includes(country.value.toLowerCase())
  ) {
    showValidatorSymbol(countryError, true);
    hideError(countryError);
    valid = true;
  } else {
    showValidatorSymbol(countryError, false);
    showError(countryError, "Please enter a valid country");
    valid = false;
  }
});

zip.addEventListener("input", (event) => {
  if (zip.value.length === 5 && !isNaN(zip.value)) {
    showValidatorSymbol(zipError, true);
    hideError(zipError);
    valid = true;
  } else {
    showValidatorSymbol(zipError, false);
    showError(zipError, "Please enter a valid zip code");
    valid = false;
  }
});

/**
 * @param {HTMLElement} password
 * @returns {boolean}
 */
password.addEventListener("input", (event) => {
  // List of password conditions
  var passwordConditions = [
    { regex: /.{8,}/, message: "At least 8 characters long" },
    { regex: /[a-z]/, message: "At least one lowercase letter" },
    { regex: /[A-Z]/, message: "At least one uppercase letter" },
    { regex: /\d/, message: "At least one number" },
    { regex: /[@$!%*?&]/, message: "At least one special character" },
  ];

  // Check each condition
  passwordConditions.forEach((condition) => {
    if (condition.regex.test(password.value)) {
      // Condition is fulfilled
      condition.fulfilled = true;
    } else {
      // Condition is not fulfilled
      condition.fulfilled = false;
    }
  });

  // Show the conditions and whether they are fulfilled
  let passwordErrorMessage =
    "<ul class='passwordConditions'>" +
    passwordConditions
      .map(
        (condition) =>
          `<li class="${condition.fulfilled ? "hidden" : ""}">${
            condition.message
          }</li>`
      )
      .join("") +
    "</ul>";

  // If all conditions are fulfilled, the password is valid
  if (passwordConditions.every((condition) => condition.fulfilled)) {
    showValidatorSymbol(passwordError, true);
    hideError(passwordError);
    valid = true;
  } else {
    showValidatorSymbol(passwordError, false);
    showError(passwordError, passwordErrorMessage);
    valid = false;
  }
});

passwordConfirm.addEventListener("input", (event) => {
  if (passwordConfirm.value === password.value) {
    showValidatorSymbol(passwordConfirmError, true);
    hideError(passwordConfirmError);
    valid = true;
  } else {
    showValidatorSymbol(passwordConfirmError, false);
    showError(passwordConfirmError, "Passwords must match");
    valid = false;
  }
});

form.addEventListener("submit", (event) => {
  // if the email field is valid, we let the form submit
  event.preventDefault();
  var element = document.querySelector(".animate");
  if (valid) {
    // Select the :root element
    var root = document.querySelector(":root");

    // Set the CSS variable
    root.style.setProperty("--color", "green");

    document.body.classList.add("animate");
    setTimeout(function () {
      document.body.classList.remove("animate");
    }, 1000);
  } else {
    // Set the CSS variable
    // Select the :root element
    var root = document.querySelector(":root");

    // Set the CSS variable
    root.style.setProperty("--color", "red");
    document.body.classList.add("animate");
    setTimeout(function () {
      document.body.classList.remove("animate");
    }, 1000);
  }
});

/**
 * @param {HTMLElement} element
 *
 */
function showError(element, message) {
  element.nextElementSibling.style.display = "inline";
  element.nextElementSibling.innerHTML = message;
}

function hideError(element) {
  element.nextElementSibling.style.display = "none";
  element.nextElementSibling.innerHTML = "";
}
