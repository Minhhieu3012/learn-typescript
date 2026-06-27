"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person = {
    name: "ohito",
    age: 21,
    address: "hcm",
    isHandSome: true,
};
const printInfo = (people) => {
    console.log("your name is:", people.name);
};
printInfo(person);
//optional
const student1 = {
    name: "ohito",
    id: 123,
};
const student2 = {
    name: "hieu",
    id: 123,
    phone: 12345,
};
