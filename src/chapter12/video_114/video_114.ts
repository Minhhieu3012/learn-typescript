export {};

class Person {
  name: string;
  age: number;

  //constructor (ham tao)
  constructor(name1: string, age1: number) {
    this.name = name1;
    this.age = age1;
  }
}

const person1 = new Person("ohito", 20);
console.log("My name is:", person1.name, "and age:", person1.age);
