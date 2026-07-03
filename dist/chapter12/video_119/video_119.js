class Dog {
    makeSound() {
        console.log("con cho keu gau gau...");
    }
}
class Cat {
    makeSound() {
        console.log("con meo keu meo meo...");
    }
}
class Pig {
    makeSound() {
        console.log("con heo keu ec ec...");
    }
}
const myDog = new Dog();
const myCat = new Cat();
const myPig = new Pig();
const myArr = ["a", "b", "c"];
const myArr1 = [1, 2, 3];
const myZoo = [myDog, myCat, myPig];
myZoo.forEach((animal, index) => {
    animal.makeSound();
});
export {};
