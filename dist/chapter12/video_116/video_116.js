"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cat {
    get id() {
        return this._id;
    }
    set id(value) {
        this._id = value;
    }
    get color() {
        return this._color;
    }
    set color(value) {
        this._color = value;
    }
    //setter => setAge
    set age(value) {
        this.age_ = value;
    }
    // getter => getName, getAge
    get age() {
        return this.age_;
    }
    constructor(name, age) {
        this._id = 1;
        this._color = "white";
        this.name = name;
        this.age_ = age;
    }
    makeSound() {
        console.log("meow meow...");
    }
}
const myCat = new Cat("ohito", 20);
const a = myCat.age; //get
myCat.age = 20; //set
