"use strict";

class Car {
  static getSpecs(car) {
    console.log(car.maxSpeed, car.speed, car.isOn, car.distance, car.price);
  }

  constructor({ price, maxSpeed }) {
    this.maxSpeed = maxSpeed;
    this.speed = 0;
    this.isOn = false;
    this.distance = 0;
    this.price = price;
  }
  set carsPrice(newPrice) {
    this.price = newPrice;
  }
  get carsPrice() {
    return this.price;
  }

  turnOn() {
    this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (value <= 0) {
      return;
    }
    if (this.speed + value < this.maxSpeed) {
      this.speed += value;
    } else {
      this.speed = this.maxSpeed;
    }
  }

  decelerate(value) {
    if (value <= 0) {
      return;
    }
    if (this.speed - value > 0) {
      this.speed -= value;
    } else {
      this.speed = 0;
    }
  }

  drive(hours) {
    if (this.turnOn) {
      this.distance += hours * this.speed;
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);
