export {};

interface IPerson {
  name: string;
  age: number;
  address?: string; //optional
  readonly language: string;
  sayHi: () => void;
}

const user: IPerson = {
  name: "hieu",
  age: 20,
  language: "vn",
  sayHi: () => console.log("im user"),
};

user.sayHi();

const user1: IPerson = {
  name: "hieu",
  age: 20,
  address: "hcm",
  language: "vn",
  sayHi: () => console.log("im user 1"),
};

interface Animal {
  name: string;
}

interface Dog extends Animal {
  breed: string;
}

const myDog: Dog = {
  name: "Buddy",
  breed: "Golden Retriever",
};
