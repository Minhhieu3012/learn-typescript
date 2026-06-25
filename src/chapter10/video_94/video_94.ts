export {};

const person: {
  name: string;
  age: number;
  address: string;
  isHandSome: boolean;
} = {
  name: "ohito",
  age: 21,
  address: "hcm",
  isHandSome: true,
};

const printInfo = (people: { name: string; age: number; address: string; isHandSome: boolean }) => {
  console.log("your name is:", people.name);
};

printInfo(person);

//optional
const student1: {
  name: string;
  id: number;
  phone?: number;
} = {
  name: "ohito",
  id: 123,
};

const student2: {
  name: string;
  id: number;
  phone?: number;
} = {
  name: "hieu",
  id: 123,
  phone: 12345,
};
