class Animal {
    constructor(name) {
        this.name = name;
    }
    test() {
        console.log("do a test:", this.name);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log("con cho keu gau gau...");
    }
}
const myDog = new Dog("doggy");
myDog.test();
myDog.makeSound();
export {};
