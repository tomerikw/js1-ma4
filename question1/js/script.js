const form = document.querySelector("#contactForm");
const lastNameError = document.querySelector("#lastNameError");
const lastName = document.querySelector("#lastName");

function okForm() {
  event.preventDefault();

  if (lastName.value.trim().length > 4) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  console.log(event);
}

form.addEventListener("submit", okForm);
