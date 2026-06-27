"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Animal {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
    //method
    makeSound() {
        console.log("kakaka with id =", this.id);
    }
}
const myDog = new Animal("dog", 1);
console.log("animal name =", myDog.name, "and id =");
myDog.makeSound();
