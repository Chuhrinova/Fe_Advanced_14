"use strict";

const users = ["Mango", "Poly", "Ajax", "Chelsey"];

users.shift(0);
console.log(users);

users.pop(3);
console.log(users);

users.unshift("Lux");
console.log(users);

users.push("Jay", "Kiwi");
console.log(users);

const userToDelete = "Ajax";
users.splice(2, 1);
console.log(users);

const userToInsert = "Kong";
const insertBefore = "Jay";
users.splice(2, 0, "Kong");
console.log(users);
