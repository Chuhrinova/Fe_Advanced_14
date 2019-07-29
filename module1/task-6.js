'use strict';

let input;
let total = 0;

input = prompt('Введите число');

while (input !== null) {
  if (isNaN(input) || input === '') {
    console.log = alert('Было введено не число, попробуйте еще раз');
  } else {
    input = Number(input);
    total += input;
  }

  input = prompt('Введите число');
}
alert(`Общая сумма чисел равна ${total}`);
