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
        return this.isOn = true
    }
    turnOff(){
        return (this.isOn = false, this.speed = 0)
    }
    accelerate(value) {
        if(value + this.speed <= this.maxSpeed){
            return this.speed += value
        } else {
            return this.speed = this.maxSpeed
        }
    }
    decelerate(value) {
        if(this.speed - value >= 0){
           return this.speed -= value
        } else {
            return this.speed = 0
        }
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