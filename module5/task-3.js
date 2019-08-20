"use strict";

class Storage {
  constructor(
    items = ["Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор"]
  ) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    this.items = this.items.filter(prod => prod !== item);
  }
}
const storage = new Storage([
  "Нанитоиды",
  "Пролонгер",
  "Железные жупи",
  "Антигравитатор"
]);

const items = storage.getItems();
console.log(items);

storage.addItem("Дроид");
console.log(storage.items);

storage.removeItem("Пролонгер");
console.log(storage.items);
