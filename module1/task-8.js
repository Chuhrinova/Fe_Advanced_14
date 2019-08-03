'use strict';

const value = Number.parseInt(Math.random() * 100);
let type;

type = value % 2 ? (type = 'odd') : (type = 'even');
console.log(`${value} is ${type}`);
