"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Parent {
    //method
    shareAHouse() {
        console.log("share a house from parent");
    }
}
class Child extends Parent {
    //method
    shareAHouse() {
        super.shareAHouse();
        console.log("share a house from child");
    }
}
const ohito = new Child();
ohito.shareAHouse();
//1. cha - con
//Animal - Dog
//Person - Student
//Employee - Developer
class Animal {
}
class Dog extends Animal {
}
