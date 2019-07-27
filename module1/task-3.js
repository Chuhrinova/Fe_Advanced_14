'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

let input = prompt('Введите Ваш пароль');

if (input !== null) {
  if (input === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }
} else {
  message = 'Отменено пользователем!';
}
console.log = alert(message);
