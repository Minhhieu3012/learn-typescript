export {};

abstract class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  abstract makeSound(): void;

  test() {
    console.log("do a test:", this.name);
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("con cho keu gau gau...");
  }
}

const myDog = new Dog("doggy");
myDog.test();
myDog.makeSound();
