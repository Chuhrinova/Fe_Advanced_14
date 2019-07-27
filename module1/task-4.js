'use strict';

const credits = 23580;
const pricePerDroid = 3000;
let input = prompt('Сколько Вам необходимо дроидов?');

if (input !== null && input !== '') {
  input = Number(input);
  let totalPrice = input * pricePerDroid;
  let accountBalance = credits - totalPrice;
  if (totalPrice <= credits) {
    console.log(
      `'Вы купили ${input} дроидов, на счету осталось ${accountBalance} кредитов.'`,
    );
  } else {
    console.log('Недостаточно средств на счету!');
  }
} else {
  console.log('Отменено пользователем!');
}
