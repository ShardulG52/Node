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

const bmw = new Car("BMW X6");
const fortuner = new Car("Fortuner");
const bmw8 = new Car("BMW 8 series");
const verna = new Car("Verna");
const baleno = new Car("Baleno");

bmw.getCarModelName();
fortuner.getCarModelName();
bmw8.getCarModelName();
verna.getCarModelName();
baleno.getCarModelName();

bmw.addFuel(50);
fortuner.addFuel(50);
bmw8.addFuel(50);
verna.addFuel(50);
baleno.addFuel(50);

bmw.getCarModelName();
fortuner.getCarModelName();
bmw8.getCarModelName();
verna.getCarModelName();
baleno.getCarModelName();
