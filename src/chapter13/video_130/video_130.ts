export {};

// khong return type thi mac dinh la void
function logLength<T extends { length: number }>(value: T) {
  console.log(value.length);
}

const a = "ohito";
logLength("ohito");
logLength([1, 2, 3]);
// logLength(123);

interface IUser {
  id: number;
  name: string;
}

function testInterface<T extends IUser>(value: T) {
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

function testClass<T extends Animal>(value: T) {
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
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

const user = { name: "ohito", age: 20 };
getProperty(user, "name");
// getProperty(user, "email");
