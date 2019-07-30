'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let input = Number(prompt('Сколько Вам необходимо дроидов?'));
let totalPrice = input * pricePerDroid;
let message;
let accountBalance = credits - totalPrice;

if (!input) {
  message = 'Отменено пользователем!';
} else if (totalPrice > credits) {
  message = 'Недостаточно средств на счету!';
} else {
  message = `Вы купили ${input} дроидов, на счету осталось ${accountBalance} кредитов.`;
}
console.log(message);
