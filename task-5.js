'use strict';
/*
Task 4
*/

class Car {
    constructor ({maxSpeed: kmH, price: value}){
        this.speed = 0;
        this._price = value;
        this.maxSpeed = kmH;
        this.isOn = false;
        this.distance = 0
    }
    static getSpecs(car) {
        console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
    }
    get price(){
        return this._price;
    }
    set price(value){
        this._price = value;
    }
    turnOn(){
        this.isOn = true
    }
    turnOff(){
        this.isOn = false, this.speed = 0
    }
    accelerate(value) {
        value + this.speed <= this.maxSpeed ? this.speed += value : this.speed = this.maxSpeed
        }
    decelerate(value) {
        this.speed - value >= 0 ? this.speed -= value : this.speed = 0
    }
    drive(hours){
        if(this.isOn){
            return this.distance += hours * this.speed
        }
    }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 30, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000