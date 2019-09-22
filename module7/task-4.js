"use strict";

let counterValue = 0;
const decrement = () => {
  counterValue -= 1;
  document.querySelector("#value").textContent = counterValue;
};
const increment = () => {
  counterValue += 1;
  document.querySelector("#value").textContent = counterValue;
};
document
  .querySelector('button[data-action="increment"]')
  .addEventListener("click", event => {
    increment();
  });

document
  .querySelector('button[data-action="decrement"]')
  .addEventListener("click", event => {
    decrement();
  });
