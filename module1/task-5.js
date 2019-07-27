'use strict';

const CHINA = 'Китай';
const CHILE = 'Чили';
const AUSTRALIA = 'Австралия';
const INDIA = 'Индия';
const JAMAICA = 'Ямайка';
const promptLabel = `Выберите страну: ${CHINA}, ${CHILE}, ${AUSTRALIA}, ${INDIA}, ${JAMAICA}`;
const priceChina = 100;
const priceChile = 250;
const priceAustralia = 170;
const priceIndia = 80;
const priceJamaica = 120;

let input = prompt(promptLabel);
const inLowerCase = input.toLowerCase();
console.log(input.toLowerCase());
let message;

if (input === null) {
  message = 'Очень жаль, приходите еще';
} else {
  switch (inLowerCase) {
    case CHINA.toLowerCase():
      message = `Доставка в ${CHINA} будет стоить ${priceChina} кредитов`;
      break;

    case string(CHILE).toLowerCase():
      message = `Доставка в ${CHILE} будет стоить ${priceChile} кредитов`;
      break;

    case string(AUSTRALIA).toLowerCase():
      message = `Доставка в ${AUSTRALIA} будет стоить ${priceAustralia} кредитов`;
      break;

    case string(INDIA).toLowerCase():
      message = `Доставка в ${INDIA} будет стоить ${priceIndia} кредитов`;
      break;

    case string(JAMAICA).toLowerCase():
      message = `Доставка в ${JAMAICA} будет стоить ${priceJamaica} кредитов`;
      break;

    default:
      message = 'В вашей стране доставка не доступна';
  }
}
console.log = alert(message);
