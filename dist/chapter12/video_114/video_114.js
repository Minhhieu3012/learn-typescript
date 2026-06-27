"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    //constructor (ham tao)
    constructor(name1, age1) {
        this.name = name1;
        this.age = age1;
    }
}
const person1 = new Person("ohito", 20);
console.log("My name is:", person1.name, "and age:", person1.age);
