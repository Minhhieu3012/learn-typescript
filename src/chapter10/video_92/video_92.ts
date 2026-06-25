export {};

//type infer
const sum = (a: number, b: number) => {
  return a + b;
};

const sayHi = (name: string) => {
  console.log("Say hi...", name);
};

sayHi("ohito");

const mySum = sum(30, 12);
console.log("my sum =", mySum);
