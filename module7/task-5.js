"use strict";

const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", handleInputChange);

function handleInputChange(event) {
  output.textContent = event.currentTarget.value;
  if (event.currentTarget.value === "") {
    output.textContent = "незнакомец";
  }
}
