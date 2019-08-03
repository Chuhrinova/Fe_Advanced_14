"use strict";

const calculateEngravingPrice = function(message, pricePerWord) {
  console.log(message, pricePerWord);
  let index;
  for (let i = 0; i < message.split(" ").length; i += 1) {
    index = i + 1;
  }
  return pricePerWord * index;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);
console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    20
  )
);
console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 40));
console.log(calculateEngravingPrice("Donec orci lectus aliquam est", 20));
