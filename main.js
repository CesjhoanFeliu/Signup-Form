//Variables
const firstName = document.querySelector("#firstNameInput");
const lastName = document.querySelector("#lastnameInput");
const email = document.querySelector("#emailInput");
const password = document.querySelector("#passInput");
//Errores
const firstNameError = document.querySelector("#firstnameError");
const lastNameError = document.querySelector("#lastnameError");
const emailError = document.querySelector("#emailError");
const passwordError = document.querySelector("#passError");
//Boton
const boton = document.querySelector("#boton");
//Funciones

boton.addEventListener("click", (event) => {
  event.preventDefault();
  validateEmpity(
    firstName.value,
    firstName,
    firstNameError,
    "First Name cannot be empty"
  );
  validateEmpity(
    lastName.value,
    lastName,
    lastNameError,
    "Last Name cannot be empty"
  );
  validateEmail(email.value, email, emailError);
  validateEmpity(
    password.value,
    password,
    passwordError,
    "Password cannot be empty"
  );
});
//Validar Contenido

function validateEmpity(valueInput, divInput, divError, nameInput) {
  if (valueInput.length == 0) {
    showError(divInput, divError, nameInput);
  } else {
    hideError(divInput, divError);
  }
}

function showError(divInput, divError, error) {
  divInput.style.border = "1px solid red";
  divError.innerHTML = `<img
  class="icon-error"
  src="./images/icon-error.svg"
  alt="error"
/>
<p class="error">${error} </p>`;
}
function hideError(divInput, divError) {
  divInput.style.border = "1px solid hsl(246, 25%, 77%)";
  divError.innerHTML = ``;
}

//Validar Email
function validateEmail(valueInput, divInput, divError) {
  let regExp =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;
  if (regExp.test(valueInput) == true) {
    hideError(divInput, divError);
  } else {
    showError(divInput, divError, "Looks like this is not an email");
  }
}
