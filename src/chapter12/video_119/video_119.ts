export {};

interface IAnimal {
  makeSound(): void;
}

class Dog implements IAnimal {
  makeSound() {
    console.log("con cho keu gau gau...");
  }
}

class Cat implements IAnimal {
  makeSound() {
    console.log("con meo keu meo meo...");
  }
}

class Pig implements IAnimal {
  makeSound() {
    console.log("con heo keu ec ec...");
  }
}

const myDog = new Dog();
const myCat = new Cat();
const myPig = new Pig();

const myArr: string[] = ["a", "b", "c"];
const myArr1: number[] = [1, 2, 3];

const myZoo: IAnimal[] = [myDog, myCat, myPig];

myZoo.forEach((animal, index) => {
  animal.makeSound();
});
