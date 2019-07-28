'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let input = prompt('Сколько Вам необходимо дроидов?');
let message;

if (input !== null && input !== '') {
  input = Number(input);
  let totalPrice = input * pricePerDroid;
  let accountBalance = credits - totalPrice;

  if (totalPrice <= credits) {
    message = `Вы купили ${input} дроидов, на счету осталось ${accountBalance} кредитов.`;
  } else {
    message = 'Недостаточно средств на счету!';
  }
} else {
  message = 'Отменено пользователем!';
}
