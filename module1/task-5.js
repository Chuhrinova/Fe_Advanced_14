'use strict';

const CHINA_MSG = 'Китай';
const CHILE_MSG = 'Чили';
const AUSTRALIA_MSG = 'Австралию';
const INDIA_MSG = 'Индию';
const JAMAICA_MSG = 'Ямайку';
const CHINA = 'китай';
const CHILE = 'чили';
const AUSTRALIA = 'австралия';
const INDIA = 'индия';
const JAMAICA = 'ямайка';
const promptLabel = `Выберите страну: ${CHINA}, ${CHILE}, ${AUSTRALIA}, ${INDIA}, ${JAMAICA}`;
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let input = prompt(promptLabel);

let message;

if (input === null) {
  message = 'Очень жаль, приходите еще';
} else {
  const inLowerCase = input.toLowerCase();
  switch (inLowerCase) {
    case CHINA:
      message = `Доставка в ${CHINA_MSG} будет стоить ${priceChina} кредитов`;
      break;

    case CHILE:
      message = `Доставка в ${CHILE_MSG} будет стоить ${priceChile} кредитов`;
      break;

    case AUSTRALIA:
      message = `Доставка в ${AUSTRALIA_MSG} будет стоить ${priceAustralia} кредитов`;
      break;

    case INDIA:
      message = `Доставка в ${INDIA_MSG} будет стоить ${priceIndia} кредитов`;
      break;

    case JAMAICA:
      message = `Доставка в ${JAMAICA_MSG} будет стоить ${priceJamaica} кредитов`;
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}
console.log = alert(message);
