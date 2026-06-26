//type infer
const sum = (a, b) => {
    return a + b;
};
const sayHi = (name) => {
    console.log("Say hi...", name);
};
sayHi("ohito");
const mySum = sum(30, 12);
console.log("my sum =", mySum);
export {};
