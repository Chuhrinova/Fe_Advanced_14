"use strict";
const input = document.getElementById("validation-input");

input.addEventListener("blur", handleBlurChange);

function handleBlurChange(event) {
  if (input.value.length === Number(input.dataset.length)) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}

input.addEventListener("click", e => {
  input.classList.remove("valid", "invalid");
});
