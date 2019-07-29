'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let input = prompt('Сколько Вам необходимо дроидов?');
let totalPrice;
let message;
let accountBalance;

if (input !== null && input !== '') {
  input = Number(input);
  totalPrice = input * pricePerDroid;
  accountBalance = credits - totalPrice;
} else {
  message = 'Отменено пользователем!';
}
console.log(message);

if (totalPrice <= credits) {
  message = `Вы купили ${input} дроидов, на счету осталось ${accountBalance} кредитов.`;
} else {
  message = 'Недостаточно средств на счету!';
}

console.log(message);
