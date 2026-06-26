export {};

type TName = string | null;

let name: TName = null;
name = "ohito";

const age: undefined = undefined;

const printName = (myName: string | null) => {
  myName!.toUpperCase();
  console.log("Name: ", myName);
};
