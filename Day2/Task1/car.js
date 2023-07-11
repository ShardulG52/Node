import React from "react";

class Car {
  constructor(model) {
    this.model = model;
    this.fuel = 2;
  }

  getCarModelName() {
    console.log(`Car Model Name : ${this.model} \nCurrent Fuel : ${this.fuel}`);
  }

  addFuel(fuelQuantity) {
    this.fuel += fuelQuantity;
    console.log(`Added Fuel Quantity in ${this.model} is ${fuelQuantity} L`);
  }
}

const myCar1 = new Car("BMW X6");
const myCar2 = new Car("Fortuner");
const myCar3 = new Car("BMW 8 series");
const myCar4 = new Car("Verna");
const myCar5 = new Car("Baleno");

myCar1.getCarModelName();
myCar2.getCarModelName();
myCar3.getCarModelName();
myCar4.getCarModelName();
myCar5.getCarModelName();

myCar1.addFuel(50);
myCar2.addFuel(50);
myCar3.addFuel(50);
myCar4.addFuel(50);
myCar5.addFuel(50);

myCar1.getCarModelName();
myCar2.getCarModelName();
myCar3.getCarModelName();
myCar4.getCarModelName();
myCar5.getCarModelName();
