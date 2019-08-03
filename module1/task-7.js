'use strict';
const hostels = 1;
const lowCostHotels = 2;
const betterHotels = 3;
const goodHotels = 4;
const bestHotels = 5;

let input = Number(prompt('введите число от 1 до 5'));
let message;
if (!input) {
  message = 'Очень жаль, приходите еще!';
} else if (input <= 5) {
  switch (input) {
    case hostels:
      message = 'Каталог хостелов';
      break;
    case lowCostHotels:
      message = 'Каталог бюджетных отелей';
      break;
    case betterHotels:
      message = 'Каталог отелей ***';
      break;
    case goodHotels:
      message = 'Каталог отелей ****';
      break;
    case bestHotels:
      message = 'Каталог лучших отелей';
      break;
  }
} else {
  message = 'Неверный ввод, возможные варианты 1-5!';
}
alert(message);
