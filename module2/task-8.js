"use strict";

const numbers = [12, 15, 25, 37, 41];
const min = numbers[0];
const max = numbers[numbers.length - 1];
let input = prompt(`Введите цифру от ${min} до ${max}`);
let message = "Цэ якась срака!";
if (input !== null) {
  message = "Сожалеем, Вы не угадали!";
  for (let i = 0; i < numbers.length; i += 1) {
    if (input === numbers[i]) {
      message = "Поздравляем, Вы угадали!";
      break;
    }
  }
} else {
  message = "Вы ввели не число!";
}

alert(message);
