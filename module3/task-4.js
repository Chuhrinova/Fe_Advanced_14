"use strict";

const countTotalSalary = function(employees) {
  let total = 0;
  const value = Object.values(employees);

  for (const count of value) {
    total += count;
  }
  return total;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80
  })
);

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150
  })
);
