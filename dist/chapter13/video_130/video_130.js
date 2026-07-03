// khong return type thi mac dinh la void
function logLength(value) {
    console.log(value.length);
}
const a = "ohito";
logLength("ohito");
logLength([1, 2, 3]);
function testInterface(value) {
    console.log(value);
}
// testInterface({ id: 30, name: "ohito" });
// testInterface({ id: 30 });
// testInterface({ name: "ohito" });
// testInterface({ id: 30, name: "ohito", age: 21 });
class Animal {
    move() {
        console.log("Moving...");
    }
}
class Dog extends Animal {
    bark() {
        console.log("Woof...");
    }
}
function testClass(value) {
    console.log(value);
    if (value instanceof Dog) {
        value.bark();
    }
}
const a1 = new Dog();
const b1 = new Animal();
testClass(b1);
testClass(a1);
//rang buoc keyof
function getProperty(obj, key) {
    return obj[key];
}
const user = { name: "ohito", age: 20 };
getProperty(user, "name");
export {};
// getProperty(user, "email");
